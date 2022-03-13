import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auths } from "../../firebase/firebase.utilis";
import CustomBtn from "../custom-btn/CustomBtn";
import FormInput from "../Form-input/FormInput";
import { useState } from "react";

// const
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      email: "",
      password: "",
    };
  }
  handleInputChange = (event) => {
    const { type, value } = event.target;

    this.setState(() => {
      return { ...this.state, [type]: value };
    });
  };
  async register() {
    // const { text, email, password } = this.state;
    console.log(this.state);
    //   try {
    //     const user = await createUserWithEmailAndPassword(auths);
    //     console.log(user);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
  }
  // register = async function () {

  //   console.log(text, email, password);
  //   try {
  //     const user = await createUserWithEmailAndPassword(auths);
  //     console.log(user);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      text: "",
      email: "",
      password: "",
    });
  };
  render() {
    const { handleSubmit, handleInputChange, register } = this;
    const { email, password, text } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">Register with Your details</h2>
        {/* <span>Sign in with your email and password</span> */}

        <form onSubmit={handleSubmit}>
          <FormInput
            type={"text"}
            name={"text"}
            value={text}
            handleChange={handleInputChange}
            label="name"
            required
          />
          <FormInput
            type={"email"}
            name={"email"}
            value={email}
            handleChange={handleInputChange}
            label="email"
            required
          />

          <FormInput
            type={"password"}
            name={"password"}
            value={password}
            handleChange={handleInputChange}
            label="password"
            required
          />
          <CustomBtn type={"submit"} onClick={register}>
            register
          </CustomBtn>
        </form>
      </div>
    );
  }
}

// export default SignUp;
