import React from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width={60} height={60} {...props} viewBox="0 0 60 60">
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#6c63ff",
        fillOpacity: 1,
      }}
      d="M10.445 8A2.444 2.444 0 0 0 8 10.445v39.11A2.444 2.444 0 0 0 10.445 52h17.11A2.444 2.444 0 0 0 30 49.555v-39.11A2.444 2.444 0 0 0 27.555 8zM30 19c0 6.066 4.934 11 11 11s11-4.934 11-11S47.066 8 41 8s-11 4.934-11 11zm11 11c-6.066 0-11 4.934-11 11s4.934 11 11 11 11-4.934 11-11-4.934-11-11-11zm0 0"
    />
  </svg>
);

export default SVGComponent;
