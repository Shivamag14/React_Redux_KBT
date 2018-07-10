import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { AppRouteComponent } from "../app.routing";
// import { Spinner } from "../common/spinner/index";

class App extends Component {
  render() {
    // const { loading } = this.props;
    return (
      <div>
        <AppRouteComponent />

        {/* {loading ? <Spinner /> : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const { auth } = state;
  // return { loading: auth.loading };
  return {};
};

const connectApp = connect(mapStateToProps)(App);
export { connectApp as App };
