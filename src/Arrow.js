import React from "react";

const Arrow = (props) => (
  <svg>
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
    <line
      x1="50"
      y1="50"
      x2={props.x}
      y2="25"
      stroke="#000"
      stroke-width="1"
      marker-end="url(#arrowhead)"
    />
  </svg>
);

export default Arrow;
