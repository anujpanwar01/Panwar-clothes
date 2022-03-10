import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
// const HatsPage = function () {
//   let navigate = useNavigate();
//   function handleClick() {
//     // <Navigate replace to={"/"} />;
//     navigate(-1);
//   }
//   // console.log(this.props.history);
//   return (
//     <div style={{ cursor: "pointer" }} onClick={handleClick}>
//       <h1>all hats</h1>
//       <Link to={"/"}>HomePage</Link>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
