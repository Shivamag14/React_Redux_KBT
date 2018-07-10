import React from "react";
import { CanvasStyle } from "../styled_components/component_styles";

export const Canvas = props => {
  return (
    <CanvasStyle
      id="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};
