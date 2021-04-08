import React from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg width={96} height={96} {...props} viewBox="0 0 96 96">
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: props.color,
        fillOpacity: 1,
      }}
      d="M58.07 48a30.51 30.51 0 0 1-.07-2c0-12.16 5.719-20 14-20 6.82 0 12.66 5.324 14 14h4l.004-18H86s-1.066 3.012-2 2.32c-3.797-2.133-7.445-2.265-12.047-2.265C60.352 22.055 50 32.52 50 45.84c0 .726.043 1.445.098 2.16h-4.2c.059-.715.102-1.434.102-2.16 0-13.32-10.352-23.785-21.953-23.785-4.602 0-8.25.133-12.047 2.265-.934.692-2-2.32-2-2.32H5.996L6 40h4c1.34-8.676 7.18-14 14-14 8.281 0 14 7.84 14 20 0 .68-.027 1.344-.07 2H0v4h2.02c2.164 0 3.953 1.723 3.996 3.887C6.094 59.578 6.449 64.012 8 66c2.54 3.25 6 6 16 6 10.043 0 19.84-9.055 22-20h4c2.16 10.945 11.957 20 22 20 10 0 13.46-2.75 16-6 1.55-1.988 1.906-6.422 1.984-10.113C90.027 53.723 91.816 52 93.98 52H96v-4zM22.953 67.46c-3.21 0-8.308-.01-8.953-3.46-.219-1.164-.184-5.055-.113-8.094a3.999 3.999 0 0 1 4-3.906H38c-1.59 9.563-7.969 15.46-15.047 15.46zM82 64c-.645 3.45-5.742 3.46-8.953 3.46C65.973 67.46 59.59 61.564 58 52h20.113a3.999 3.999 0 0 1 4 3.906c.07 3.04.106 6.93-.113 8.094zm0 0"
    />
  </svg>
);

export default SVGComponent;
