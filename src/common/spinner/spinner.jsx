import React from "react";
import "./spinner.css";
// import loader from "../../assets/images/loader.gif";
import loader from "../../assets/images/heartbeat_loader.gif";

export const Spinner = props => {
  return (
    <div>
      <div className="spinner_background" />

      <div className="spinner_container">
        <img src={loader} alt="loading...." style={loaderStyle} />
      </div>
    </div>
  );
};

const loaderStyle = {
  borderRadius: "50%"
};

{
  /* <div class="spinner_container">
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1" />
          <div class="sk-cube sk-cube2" />
          <div class="sk-cube sk-cube3" />
          <div class="sk-cube sk-cube4" />
          <div class="sk-cube sk-cube5" />
          <div class="sk-cube sk-cube6" />
          <div class="sk-cube sk-cube7" />
          <div class="sk-cube sk-cube8" />
          <div class="sk-cube sk-cube9" />
        </div>
      </div> */
}
