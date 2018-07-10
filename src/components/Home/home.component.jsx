import React, { Component } from "react";
import { connect } from "react-redux";
import { Sidebar } from "../Sidebar/index";
import Header from "../Header/header.component";
// import { Footer } from "../Footer/index";
import styled from "styled-components";
import { history } from "../../_helpers/index";
import { Reports } from "../../components/Reports";
import { Analytics } from "../../components/Analytics";
import { Route } from "react-router-dom";
import { Spinner } from "../../common/spinner/index";

const HomeContainer = styled.section`
  padding: 15px;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 64px;
  left: 16.7%;
  right: 0;
  // bottom: 60px;
  bottom: 0px;
  background: #f1f1f1;
  padding-bottom: 3.5%;
  transition: all 0.2s ease;
`;

class Home extends Component {
  state = {
    auth: true,
    anchorEl: null
  };

  componentDidMount() {
    const location = this.props.location.pathname;
    switch (location) {
      case "/":
        history.push(`/home/analytics`);
        break;
      case `/home/reports`:
        history.push(`/home/reports`);
        break;
      case `/home/analytics`:
        history.push(`/home/analytics`);
        break;
      default:
        break;
    }
  }

  handleMenu = event => {
    // console.log("handleMenu");
  };

  handleDropMenu = event => {
    // console.log("handleDropMenu");
    this.setState({ anchorEl: event.currentTarget });
    setTimeout(() => {
      this.setState({
        anchorEl: null
      });
    }, 2000);
  };

  handleOpenDropdownFunc = route => {
    // console.log("route: ", route);
    switch (route) {
      case "logout":
        this.setState({
          anchorEl: null
        });
        localStorage.clear();
        setTimeout(() => {
          history.push(`/login`);
        }, 2000);
        break;
      case "profile":
        this.setState({
          anchorEl: null
        });
        // history.push(`/profile`);
        break;
      default:
        break;
    }
  };

  render() {
    const { auth, anchorEl } = this.state;
    const { loading, loggedInUser } = this.props;
    // console.log("this.props: ", this.props);

    return (
      <div>
        <Sidebar />
        <Header
          anchorEl={anchorEl}
          auth={auth}
          menuFunc={this.handleMenu}
          menuDropdownFunc={this.handleDropMenu}
          openDropDownFunc={this.handleOpenDropdownFunc}
          loggedInUser={loggedInUser}
        />
        <HomeContainer>
          {/* <h1>Home component</h1>
          <hr /> */}
          {loading ? <Spinner /> : null}
          <Route exact path={`/home/reports`} component={Reports} />
          <Route exact path={`/home/analytics`} component={Analytics} />
        </HomeContainer>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state in home: ", state);

  const { user, auth } = state;
  return {
    loading: user.loading,
    loggedInUser: auth.user.loggedInUser
  };
};

const connectApp = connect(mapStateToProps)(Home);
export { connectApp as Home };
