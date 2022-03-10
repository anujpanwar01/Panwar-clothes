import React, { useState } from "react";
import FormInput from "../Form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";
import "./Sign-in.scss";

///////////////////////////////////////////////////////////////////////
// 1) using hooks
///////////////////////////////////////////////////////////////////////
const SignIn = function () {
  // 1) using one  state object
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });

  // 2) using separate state

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 1) for first method
    setInputState({
      email: "",
      password: "",
    });

    // 2) for second method
    // setEmail("");
    // setPassword("");
  };
  const handleInputChange = (event) => {
    const { type, value } = event.target;

    // console.log([type]);
    // console.log(typeof [type]);
    // console.log(typeof inputState.email);
    setInputState(() => {
      return { ...inputState, [type]: value };
      // [type] why? because we take object
      // if we use type then js pretend it's an object property but that's not it
      // so we use [type]=email:value
    });
  };

  // two callback for the different object
  /* const handleEmailChange = (event) => {
     const { type, value } = event.target;
     // console.log(event);
     console.log(value, type);
     setInputState(() => {
       return { ...inputState, email: event.target.value };
     });

     // 2) for second method
     // setEmail(event.target.value);
   };
   const handlePasswordChange = (event) => {
     setInputState(() => {
       return { ...inputState, password: event.target.value };
     });
     // 2)
     // setPassword(event.target.value);
   };

  */

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type={"email"}
          name={"email"}
          value={inputState.email}
          handleChange={handleInputChange}
          label="email"
          required
        />

        <FormInput
          type={"password"}
          name={"password"}
          value={inputState.password}
          handleChange={handleInputChange}
          label="password"
          required
        />
        <CustomBtn type={"submit"}>Sign IN</CustomBtn>
      </form>
    </div>
  );
};

////////////////////////////////////////////////////////////////
// 2) using class component;
///////////////////////////////////////////////////////////////
// class SignIn extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       email: "",
//       password: "",
//     });
//   };
//   handleChange = (event) => {
//     console.log(event.target.value);
//     // const [value, name] = event.target.value;
//     // this.setState({ [name]: value });
//     // console.log(value);
//   };
//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             type={"email"}
//             name={"email"}
//             value={this.state.email}
//             label='email'
//             onChange={this.handleChange}
//             required
//           />
//           <FormInput
//             type={"password"}
//             name={"password"}
//             value={this.state.password}
//             label="password"
//             onChange={this.handleChange}
//             required
//           />
//           <CustomBtn type={"submit"}>Sign in</CustomBtn>
//         </form>
//       </div>
//     );
//   }
// }
export default SignIn;
