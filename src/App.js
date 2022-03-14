import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firbase.utilites";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  //we want unsubscribe when componentWillUnmount
  unsubscirbeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscirbeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // createUserProfileDocument(user);
      // console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscirbeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to={"/"} />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

//2) second argu
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
//1) first argu will be null because we don't need the any "props"
export default connect(mapStateToProps, mapDispatchToProps)(App);
