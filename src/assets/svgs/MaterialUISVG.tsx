import React from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width={96} height={96} {...props} viewBox="0 0 96 96">
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#6c63ff",
        fillOpacity: 1,
      }}
      d="m2 10 12 8v40L2 50zm92 30-12 8v26l12-8zm0-28-12 8v14l12-8zm-24-2-12 8v40l12-8zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#6c63ff",
        fillOpacity: 1,
      }}
      d="m2 24 34 22V32L2 10zm68 0L36 46V32l34-22zm0 28L36 74V60l34-22zm24 16L60 90V76l34-22zm0 0"
    />
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#6c63ff",
        fillOpacity: 1,
      }}
      d="M60 75.531 36 60v14l24 15.531zm0 0"
    />
  </svg>
);

export default SVGComponent;
