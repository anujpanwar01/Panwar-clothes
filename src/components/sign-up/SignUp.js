import React from "react";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firbase.utilites";
import CustomBtn from "../custom-btn/CustomBtn";
import FormInput from "../Form-input/FormInput";
import "./SignUp.scss";

// const
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState(() => {
      return { [name]: value };
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;
    //1 password not match
    if (confirmPassword !== password) {
      alert("Password not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(email, password, displayName);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { handleSubmit, handleInputChange } = this;
    const { email, password, displayName, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            type={"text"}
            name={"displayName"}
            value={displayName}
            handleChange={handleInputChange}
            label="display Name"
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
          <FormInput
            type={"password"}
            name={"confirmPassword"}
            value={confirmPassword}
            handleChange={handleInputChange}
            label="confirm  password"
            required
          />
          <CustomBtn type={"submit"}>Sign up</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignUp;
