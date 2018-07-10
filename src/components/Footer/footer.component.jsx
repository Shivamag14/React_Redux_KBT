import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2em;
  text-align: center;
  color: white;
  background: rgb(10, 33, 62);
  padding: 30px 0px;
`;

const footerStyle = {
  position: "relative",
  top: "-9px",
  padding: "0px 10px"
};

export const Footer = props => {
  return (
    <FooterContainer>
      <span style={footerStyle}>
        Copyright 2017 Kingsbridge Technologies, a division of Kingsbridge
        Holdings, LLC – Toll Free: 1-877-204-3747
      </span>
    </FooterContainer>
  );
};
