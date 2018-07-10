import React from "react";
import { Grid, Button, Form, Transition } from "semantic-ui-react";
import {
  Container,
  FormContainer,
  ButtonDiv
} from "../styled_components/component_styles";
import { Link } from "react-router-dom";

const titleStyle = {
  textAlign: "center"
};
const labelStyle = {
  // color: "white"
};
const pStyle = {
  color: "red",
  padding: "8px 8px 0px 0px",
  fontSize: "11px"
};

const hasError = {
  border: "1px solid red"
};

const inputStyle = {
  border: "1px solid lightgrey"
};

const gridStyle = {
  position: "relative",
  width: "100%",
  height: window.innerHeight,
  marginLeft: "0px"
};

const rowPad = {
  margin: "0px",
  padding: "0px"
};

export const RegisterForm = props => {
  const {
    username,
    password,
    email,
    confirmPassword,
    submitFunc,
    changeFunc,
    registerError,
    registerFormValid,
    anime,
    duration,
    visible
  } = props;

  return (
    <Grid style={gridStyle}>
      <Grid.Row style={rowPad}>
        <Grid.Column width={16}>
          <Container>
            <FormContainer>
              <h2 style={titleStyle}>{props.children}</h2>
              <Form htmlFor="myForm" name="myForm" onSubmit={submitFunc}>
                <Form.Field>
                  <label style={labelStyle}>Username</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={username}
                    onChange={changeFunc}
                    style={
                      registerError.username !== null &&
                      registerError.username !== undefined &&
                      Object.keys(registerError).length > 0
                        ? hasError
                        : inputStyle
                    }
                  />
                  {registerError.username !== null &&
                    registerError.username !== undefined &&
                    Object.keys(registerError).length > 0 && (
                      <Transition
                        animation={anime}
                        duration={duration}
                        visible={visible}
                      >
                        <p style={pStyle}>{registerError.username}</p>
                      </Transition>
                    )}
                </Form.Field>
                <Form.Field>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={changeFunc}
                    style={
                      registerError.email !== null &&
                      registerError.email !== undefined &&
                      Object.keys(registerError).length > 0
                        ? hasError
                        : inputStyle
                    }
                  />
                  {registerError.email !== null &&
                    registerError.email !== undefined &&
                    Object.keys(registerError).length > 0 && (
                      <Transition
                        animation={anime}
                        duration={duration}
                        visible={visible}
                      >
                        <p style={pStyle}>{registerError.email}</p>
                      </Transition>
                    )}
                </Form.Field>
                <Form.Field>
                  <label style={labelStyle}>Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={changeFunc}
                    style={
                      registerError.password !== null &&
                      registerError.password !== undefined &&
                      Object.keys(registerError).length > 0
                        ? hasError
                        : inputStyle
                    }
                  />

                  {registerError.password !== null &&
                    registerError.password !== undefined &&
                    Object.keys(registerError).length > 0 && (
                      <Transition
                        animation={anime}
                        duration={duration}
                        visible={visible}
                      >
                        <p style={pStyle}>{registerError.password}</p>
                      </Transition>
                    )}
                </Form.Field>
                <Form.Field>
                  <label style={labelStyle}>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={changeFunc}
                    style={
                      registerError.cnfPass !== null &&
                      registerError.cnfPass !== undefined &&
                      Object.keys(registerError).length > 0
                        ? hasError
                        : inputStyle
                    }
                  />
                  {registerError.cnfPass !== null &&
                    registerError.cnfPass !== undefined &&
                    Object.keys(registerError).length > 0 && (
                      <Transition
                        animation={anime}
                        duration={duration}
                        visible={visible}
                      >
                        <p style={pStyle}>{registerError.cnfPass}</p>
                      </Transition>
                    )}
                </Form.Field>
                {registerFormValid && (
                  <ButtonDiv>
                    <Button type="submit">Register</Button>
                  </ButtonDiv>
                )}
              </Form>
              <ButtonDiv>
                <span style={{ padding: "10px 0px 0px 0px" }}>
                  Already registered? <Link to="/login">Login</Link>
                </span>
              </ButtonDiv>
            </FormContainer>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export const LoginForm = props => {
  const {
    username,
    password,
    submitFunc,
    changeFunc,
    loginError,
    loginFormValid,
    anime,
    duration,
    visible
  } = props;

  return (
    <Grid style={gridStyle}>
      <Grid.Row style={rowPad}>
        {/* mobile={16} tablet={8} computer={5} */}
        <Grid.Column width={16}>
          {" "}
          {/* mobile={16} tablet={8} computer={5} */}
          <Container>
            <FormContainer>
              <h2 style={titleStyle}>{props.children}</h2>
              <Form htmlFor="myForm" name="myForm" onSubmit={submitFunc}>
                <Form.Field>
                  <label style={labelStyle}>Username</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={username}
                    onChange={changeFunc}
                    style={
                      loginError.username !== undefined &&
                      loginError.username !== null &&
                      Object.keys(loginError).length > 0
                        ? hasError
                        : inputStyle
                    }
                  />
                  {loginError.username !== undefined &&
                    loginError.username !== null &&
                    Object.keys(loginError).length > 0 && (
                      <Transition
                        animation={anime}
                        duration={duration}
                        visible={visible}
                      >
                        <p style={pStyle}>{loginError.username}</p>
                      </Transition>
                    )}
                </Form.Field>
                <Form.Field>
                  <label style={labelStyle}>Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={changeFunc}
                    style={
                      loginError.password !== undefined &&
                      loginError.password !== null &&
                      Object.keys(loginError).length > 0
                        ? hasError
                        : inputStyle
                    }
                  />

                  {loginError.password !== undefined &&
                    loginError.password !== null &&
                    Object.keys(loginError).length > 0 && (
                      <Transition
                        animation={anime}
                        duration={duration}
                        visible={visible}
                      >
                        <p style={pStyle}>{loginError.password}</p>
                      </Transition>
                    )}
                </Form.Field>
                {loginFormValid && (
                  <ButtonDiv>
                    <Button type="submit">Go</Button>
                  </ButtonDiv>
                )}
              </Form>
              <ButtonDiv>
                <span style={{ padding: "10px 0px 0px 0px" }}>
                  Don't have an account? <Link to="/register">Register</Link>
                </span>
              </ButtonDiv>
            </FormContainer>
          </Container>
        </Grid.Column>
        {/* mobile={16} tablet={8} computer={5} */}
      </Grid.Row>
    </Grid>
  );
};
