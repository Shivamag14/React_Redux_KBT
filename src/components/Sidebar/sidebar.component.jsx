import React, { Component } from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";
import reportIcon from "../../assets/icons/reportIcon.png";
import analyticsIcon from "../../assets/icons/analyticsIcon.png";
import image from "../../assets/images/vectorpaint.svg";
import "./sidebar.css";
import { history } from "../../_helpers/index.js";

const SidebarContainer = styled.div`
  background: #fff;
  font-family: Roboto;
  position: fixed;
  top: 0;
  width: 16.7%;
  border: none;
  border-radius: 0;
  background-color: #fff;
  // bottom: 60px;
  bottom: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  /* padding-bottom: 40px; */
  border-right: 1px dotted #d3d3d3;
  transition: all 0.2s ease;
`;

const logo = {
  height: "100%",
  width: "98%"
};

const logoContainer = {
  width: "100%",
  padding: "0.5em 2px",
  borderBottom: "1px solid lightgrey"
};

const reportStyle = {
  width: "16%"
};

const spanStyle = {
  position: "relative",
  top: "8px",
  left: "10px",
  fontSize: "2em"
};

const listItems = {
  margin: "1em 0em",
  position: "relative"
};

export class Sidebar extends Component {
  state = {
    isActive: ""
  };

  componentDidMount() {
    const location = history.location.pathname;
    switch (location) {
      case `/home/reports`:
        this.setState(
          {
            isActive: "reports"
          },
          () => {}
        );
        break;
      case `/home/analytics`:
        this.setState(
          {
            isActive: "analytics"
          },
          () => {}
        );
        break;
      default:
        break;
    }
  }

  handleActiveLink = activeLink => {
    // console.log("activeLink:", activeLink);
    switch (activeLink) {
      case "analytics":
        this.setState(
          {
            isActive: "analytics"
          },
          () => {}
        );
        history.push("/home/analytics");
        break;
      case "reports":
        this.setState(
          {
            isActive: "reports"
          },
          () => {}
        );
        history.push("/home/reports");
        break;
      default:
        break;
    }
  };
  render() {
    const { isActive } = this.state;

    return (
      <SidebarContainer>
        <div style={logoContainer}>
          <img src={image} alt="logo" style={logo} />
        </div>
        <List>
          <List.Item
            style={listItems}
            onClick={() => this.handleActiveLink("analytics")}
            className={isActive === "analytics" ? "active" : ""}
          >
            <a>
              <img
                src={analyticsIcon}
                alt="analyticImg"
                style={reportStyle}
                title="Analytics"
              />
              <span style={spanStyle}>Analytics</span>
            </a>
          </List.Item>
          <List.Item
            style={listItems}
            onClick={() => this.handleActiveLink("reports")}
            className={isActive === "reports" ? "active" : ""}
          >
            <a>
              <img
                src={reportIcon}
                alt="reportImg"
                style={reportStyle}
                title="Report"
              />
              <span style={spanStyle}>Reports</span>
            </a>
          </List.Item>
        </List>
      </SidebarContainer>
    );
  }
}
