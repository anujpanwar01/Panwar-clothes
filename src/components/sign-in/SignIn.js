import React from "react";

import FormInput from "../Form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";

import { auth, signInWithGoogle } from "../../firebase/firbase.utilites";
import "./Sign-in.scss";

////////////////////////////////////////////////////////////////
// 2) using class component;
///////////////////////////////////////////////////////////////
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    // console.log(event.target.value);
    const { value, name } = event.target;
    this.setState({ [name]: value });
    // console.log(value);
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type={"email"}
            name={"email"}
            value={this.state.email}
            label="email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type={"password"}
            name={"password"}
            value={this.state.password}
            label="password"
            onChange={this.handleChange}
            required
          />
          <div className="btn">
            <CustomBtn type={"submit"}>Sign in</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;

// ///////////////////////////////////////////////////////////////////////
// // 1) using hooks
// ///////////////////////////////////////////////////////////////////////
// let error;
// const SignIn = function () {
//   // 1) using one  state object
//   const [errorMessage, setErrorMessage] = useState(
//     "Sign in with your email and password"
//   );
//   const [inputState, setInputState] = useState({
//     email: "",
//     password: "",
//     loginEmail: "",
//     loginPassword: "",
//   });

//   const loginWithGoogle = async function () {
//     try {
//       const users = await signInWithPopup(auths, provider);

//       // if(user.operationType)
//       const { displayName } = users.user;
//       const firstLetter = displayName.map((ele) => ele[0]);
//       const lastletters = displayName.map((ele) => ele.slice(1));
//       console.log(firstLetter, lastletters);
//       // console.log(displayName);
//       // console.log(user);
//       // console.log(users.operationType);
//       if (users.operationType) {
//         setErrorMessage("Sucess");
//       }

//       // console.log(user);
//     } catch (err) {
//       err.message = `You are'nt sign in, Please Register first.`;
//       throw setErrorMessage(err.message);
//     }
//   };

//   const loginWithEmail = async function () {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auths,
//         inputState.email,
//         inputState.password
//       );
//       if (user.operationType) {
//         setErrorMessage("Success");
//       }
//       console.log(user.operations);
//       console.log(user);
//     } catch (err) {
//       error = err.code;
//       err.message = `You are'nt sign in, Please Register first.`;
//       throw setErrorMessage(err.message);
//     }
//   };
//   console.log(error);
//   // 2) using separate state

//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // 1) for first method
//     setInputState({
//       email: "",
//       password: "",
//     });

//     // 2) for second method
//     // setEmail("");
//     // setPassword("");
//   };
//   const handleInputChange = (event) => {
//     const { type, value } = event.target;

//     // console.log([type]);
//     // console.log(typeof [type]);
//     // console.log(typeof inputState.email);
//     setInputState(() => {
//       return { ...inputState, [type]: value };
//       // [type] why? because we take object
//       // if we use type then js pretend it's an object property but that's not it
//       // so we use [type]=email:value
//     });
//   };

//   // two callback for the different object
//   /* const handleEmailChange = (event) => {
//      const { type, value } = event.target;
//      // console.log(event);
//      console.log(value, type);
//      setInputState(() => {
//        return { ...inputState, email: event.target.value };
//      });

//      // 2) for second method
//      // setEmail(event.target.value);
//    };
//    const handlePasswordChange = (event) => {
//      setInputState(() => {
//        return { ...inputState, password: event.target.value };
//      });
//      // 2)
//      // setPassword(event.target.value);
//    };

//   */

//   return (
//     <div className="sign-in">
//       <h2 className="title">I already have an account</h2>
//       <span className={`${error ? "red" : null}`}>
//         <FaExclamationTriangle
//           style={{
//             display: `${error ? "inline-block" : "none"}`,
//             marginRight: "15px",
//           }}
//         />
//         {errorMessage}
//       </span>

//       <form onSubmit={handleSubmit}>
//         <FormInput
//           type={"email"}
//           name={"email"}
//           value={inputState.email}
//           handleChange={handleInputChange}
//           label="email"
//           required
//         />

//         <FormInput
//           type={"password"}
//           name={"password"}
//           value={inputState.password}
//           handleChange={handleInputChange}
//           label="password"
//           required
//         />
//         <CustomBtn type={"submit"} onClick={loginWithEmail}>
//           Sign IN
//         </CustomBtn>
//         <CustomBtn onClick={loginWithGoogle}>Sign IN</CustomBtn>
//       </form>
//     </div>
//   );
// };
