import React from "react";
import { Canvas } from "../../_components/index";
import { Grid } from "semantic-ui-react";

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

const container = {
  height: "382px",
  padding: "11px 26px",
  borderRadius: "4px",
  position: "absolute",
  width: "calc(50 % - 83px)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px"
};

const ul = {
  listStyle: "none",
  display: "inline-flex",
  position: "relative",
  top: "11em",
  left: "-2em"
};

const li = {
  padding: "2px",
  fontSize: "20em",
  fontWeight: "600",
  color: "white"
};

// const imageStyle = {
//   position: "fixed",
//   background:
//     'url("https://365psd.com/images/previews/05e/404-error-page-free-psd-template-56927.jpg")',
//   top: "0",
//   backgroundSize: "cover",
//   left: "0",
//   width: "100%",
//   height: "100%"
// };

const textStyle = {
  position: "relative",
  top: "40%",
  fontSize: "3em",
  left: "27%",
  color: "white"
};

export const PageNotFound = () => {
  return (
    <div>
      <Canvas />
      <Grid style={gridStyle}>
        <Grid.Row style={rowPad}>
          <Grid.Column width={16}>
            <div style={container}>
              <ul style={ul}>
                <li style={li}>4</li>
                <li style={li}>0</li>
                <li style={li}>4</li>
              </ul>
              <h3 style={textStyle}>Page Not found</h3>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
