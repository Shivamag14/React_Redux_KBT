import styled from "styled-components";
// import {
//     media
// } from './media';

export const CanvasStyle = styled.canvas `
      position: fixed;
      background: url("https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg");
      top: 0;
      background-size: cover;
      left: 0;
      width: 100% ;
      height: 100% ;
    `;

export const Title = styled.h2 `
      position: relative;
      text-align: center;
    `;

export const Wrapper = styled.div `
  position: relative;
  width: ${window.innerWidth};
  height: ${window.innerHeight};
  top: 14px;
  left: 14px;
  `;

export const Container = styled.div `
      position: relative;
      width: 100% ;
      height: 100% ;
  `;

export const FormContainer = styled.div `
        background: white;
        padding: 11px 26px;
        border-radius: 4px;
        position: absolute;
        width: calc(50% - 200px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 300px;
        max-width: 426px;
        
        @media (min-width: 600px) and (max-width: 767px) {
            margin: 5em 0em;
        }
        `;

export const ButtonDiv = styled.div `
        position: relative;
        display: flex;
        justify-content: center;
        text-align: center`;