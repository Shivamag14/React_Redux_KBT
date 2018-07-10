import React, { Component } from "react";
import { Canvas } from "../../_components/index";
import { connect } from "react-redux";
import { LoginForm } from "../../_components/index";
import { authActions } from "../../_actions/index";
import { Spinner } from "../../common/spinner/index";
import { ToasterView } from "../../common/toaster/index";

class Login extends Component {
  state = {
    username: "",
    password: "",
    submitted: false,
    loggingIn: false,
    errors: {},
    isValid: false,
    animation: "shake",
    duration: 2000,
    visible: true
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ visible: !this.state.visible });
    let error = this.validate(name, value, this.state.errors);

    if (
      error.password === null &&
      error.username === null &&
      this.state.username !== "" &&
      this.state.password !== ""
    ) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(authActions.login(username, password));
    }
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
      default:
        return null;
    }
    return errors;
  };

  render() {
    const { errors, isValid, animation, duration, visible } = this.state;
    const { loading } = this.props;
    return (
      <div>
        <Canvas />
        <LoginForm
          submitFunc={this.handleSubmit}
          changeFunc={this.handleChange}
          loginError={errors}
          loginFormValid={isValid}
          anime={animation}
          duration={duration}
          visible={visible}
        >
          Login
        </LoginForm>
        <ToasterView />
        {loading ? <Spinner /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    loading: auth.loading
  };
};

// if we don't use mapDispatchToProps() then we can get dispatch func in the props itself
// const connectedApp = withRouter(connect(mapStateToProps)(Login));
const connectedApp = connect(mapStateToProps)(Login);
export { connectedApp as Login };
