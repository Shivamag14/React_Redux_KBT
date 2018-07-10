import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterForm } from "../../_components/index";
import { Canvas } from "../../_components/canvas";

class Register extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    registered: false,
    errors: {},
    isValid: false,
    animation: "shake",
    duration: 2000,
    visible: true
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("state: ", this.state);
    this.setState({ visible: !this.state.visible });
    let error = this.validate(name, value, this.state.errors);

    if (name === "password" || name === "confirmPassword") {
      this.validatePassMatch(this.state.password, value, this.state.errors);
    }

    if (
      error.email === null &&
      error.password === null &&
      error.username === null &&
      error.cnfPass === null &&
      this.state.username !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.confirmPassword !== ""
    ) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("this.state", this.state);
  };

  validate = (name, value, errors) => {
    switch (name) {
      case "username":
        if (value === "" || value === undefined) {
          errors.username = "Required";
        } else if (value.length > 15) {
          errors.username = "Must be 15 characters or less";
        } else {
          errors.username = null;
        }
        break;
      case "email":
        if (value === "" || value === undefined) {
          errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          errors.email = "Invalid email address";
        } else {
          errors.email = null;
        }
        break;
      case "password":
        if (value === "" || value === undefined) {
          errors.password = "Required";
        } else if (
          !/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[@#!-_\*&\^%\$#]).{6,15}$/i.test(
            value
          )
        ) {
          errors.password = `Invalid password. Password should contain 1 caps , 1 small letter and 1 number.`;
        } else {
          errors.password = null;
        }
        break;
      case "confirmPassword":
        if (value === "" || value === undefined) {
          errors.cnfPass = "Required";
        } else if (
          !/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[@#!-_\*&\^%\$#]).{6,15}$/i.test(
            value
          )
        ) {
          errors.cnfPass = `Invalid password. Password should contain 1 caps , 1 small letter and 1 number.`;
        } else {
          errors.cnfPass = null;
        }
        break;
      default:
        return null;
    }
    return errors;
  };

  validatePassMatch = (pass, cnfPass, errors) => {
    console.log("pass, cPass, errors: ", pass, cnfPass, errors);
    if (errors.password === null && errors.cnfPass === null) {
      if (pass.toString().toLowerCase() !== cnfPass.toString().toLowerCase()) {
        console.log("inside 2nd if: ");
        errors.cnfPass = "Password donot match";
      } else {
        errors.cnfPass = null;
      }
    }
    return errors;
  };

  render() {
    const { errors, isValid, animation, duration, visible } = this.state;

    return (
      <div>
        <Canvas />
        <RegisterForm
          submitFunc={this.handleSubmit}
          changeFunc={this.handleChange}
          registerError={errors}
          registerFormValid={isValid}
          anime={animation}
          duration={duration}
          visible={visible}
        >
          {" "}
          Register
        </RegisterForm>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const { items } = state.todo;
  return {};
};

// if we don't use mapDispatchToProps() then we can get dispatch func in the props itself
const connectedApp = connect(mapStateToProps)(Register);
export { connectedApp as Register };
