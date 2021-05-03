import React from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => (
   <svg width={100} height={100} {...props} viewBox="0 0 100 100">
      <path
         style={{
            stroke: "none",
            fillRule: "nonzero",
            fill: props.color,
            fillOpacity: 1,
         }}
         d="M10 8a2 2 0 0 0-2 2v80a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm2 4h76v76H12zm10 14v1l3.715 5c.183.219.285.492.285.777V63c0 .441-.152.871-.434 1.215L20 71.094V72h16v-.906l-5.57-6.918a1.935 1.935 0 0 1-.43-1.211V36.75L46.61 72h3.085l.012-.04L64 35.759V65.5a1.2 1.2 0 0 1-.36.855L58 71.094V72h22v-.906l-3.64-4.739A1.2 1.2 0 0 1 76 65.5V32.25c0-.32.129-.629.36-.855L80 27v-1H63.55L51.993 55.285 38.195 26zm9.242 4h4.414l14.32 30.39-2.011 5.098h-.004zM68 30h4.516A5.189 5.189 0 0 0 72 32.25V65.5c0 .875.227 1.738.645 2.5h-5.29A5.212 5.212 0 0 0 68 65.5zm0 0"
      />
   </svg>
);

export default SVGComponent;
