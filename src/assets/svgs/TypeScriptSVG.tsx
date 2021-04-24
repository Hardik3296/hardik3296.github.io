import React from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width={100} height={100} {...props} viewBox="0 0 100 100">
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#6c63ff",
        fillOpacity: 1,
      }}
      d="M10 8a2 2 0 0 0-2 2v80a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm2 4h76v76H12zm18 34v6.89h10V84h8V52.89h10V46zm43.383.02c-6.23-.024-13.348 1.863-13.348 10.628 0 11.461 15.442 11.461 15.442 16.633 0 .489.207 4.051-5.243 4.051-5.449 0-9.992-3.426-9.992-3.426v8.317s23.762 7.683 23.762-9.645C84 61.328 68.418 61.891 68.418 56.301c0-2.164 1.539-4.192 5.8-4.192 4.262 0 8.036 2.516 8.036 2.516l.281-7.41s-4.308-1.176-9.152-1.195zm0 0"
    />
  </svg>
);

export default SVGComponent;
