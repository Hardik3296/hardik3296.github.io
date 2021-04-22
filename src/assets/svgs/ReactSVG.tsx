import React from "react";

const SVGComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width={100} height={100} {...props} viewBox="0 0 100 100">
    <path
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#6c63ff",
        fillOpacity: 1,
      }}
      d="M69.11 7.969c-1.56-.051-3.192.218-4.829.75-3.273 1.062-6.703 3.129-10.222 5.992-1.38 1.121-2.77 2.406-4.168 3.766-1.368-1.329-2.73-2.575-4.078-3.672-3.516-2.86-6.938-4.93-10.204-5.989-3.265-1.058-6.515-1.09-9.183.45-2.668 1.539-4.266 4.367-4.98 7.726-.716 3.36-.637 7.356.081 11.832.25 1.555.606 3.188 1.012 4.848a60.42 60.42 0 0 0-4.379 1.484c-4.144 1.617-7.574 3.555-10.07 5.86-2.496 2.304-4.11 5.101-4.11 8.172 0 3.07 1.614 5.863 4.11 8.167 2.496 2.305 5.926 4.247 10.07 5.864 1.469.574 3.059 1.09 4.7 1.578-.59 2.207-1.07 4.348-1.395 6.375-.719 4.48-.797 8.48-.078 11.844.718 3.363 2.312 6.21 4.996 7.757 2.683 1.547 5.945 1.512 9.219.45 3.273-1.063 6.699-3.125 10.218-5.989 1.367-1.113 2.75-2.379 4.133-3.726 1.39 1.355 2.777 2.629 4.152 3.746 3.516 2.86 6.942 4.926 10.208 5.984 3.265 1.059 6.515 1.09 9.183-.449 2.668-1.539 4.262-4.367 4.977-7.727.715-3.359.636-7.351-.082-11.828-.329-2.035-.805-4.183-1.399-6.394 1.695-.5 3.336-1.031 4.848-1.621 4.144-1.617 7.574-3.559 10.07-5.864 2.496-2.304 4.11-5.097 4.11-8.167 0-3.07-1.614-5.868-4.11-8.172-2.496-2.305-5.926-4.243-10.07-5.86-1.395-.543-2.895-1.035-4.445-1.504.41-1.672.773-3.316 1.023-4.879.719-4.48.797-8.484.078-11.847-.719-3.363-2.316-6.207-5-7.754-1.34-.774-2.828-1.152-4.387-1.203zm-.184 4.07c.98.027 1.812.258 2.527.672 1.43.824 2.484 2.43 3.047 5.07.563 2.64.543 6.211-.121 10.348-.227 1.418-.559 2.918-.934 4.457-4.09-.984-8.574-1.715-13.351-2.145-2.399-3.324-4.864-6.351-7.348-9.035 1.313-1.281 2.621-2.484 3.895-3.52 3.25-2.644 6.328-4.445 8.898-5.277 1.285-.418 2.406-.597 3.387-.57zm-37.953.012c.984-.028 2.109.152 3.398.57 2.578.836 5.66 2.633 8.914 5.281 1.25 1.016 2.528 2.192 3.813 3.446-2.504 2.707-4.989 5.761-7.403 9.113-4.758.437-9.222 1.172-13.293 2.16-.37-1.531-.703-3.023-.93-4.434-.663-4.14-.683-7.71-.117-10.359.567-2.648 1.63-4.265 3.07-5.098.72-.418 1.563-.652 2.548-.68zm18.98 12.234a91.115 91.115 0 0 1 4.875 5.8A115.47 115.47 0 0 0 50 29.98c-1.664 0-3.305.04-4.922.11a90.141 90.141 0 0 1 4.875-5.805zM50 34.02c2.719 0 5.371.113 7.95.3a113.33 113.33 0 0 1 5.16 8.114 113.444 113.444 0 0 1 3.96 7.504 113.822 113.822 0 0 1-4.015 7.605 115.753 115.753 0 0 1-4.024 6.43c-2.914.242-5.93.379-9.031.379-3.176 0-6.262-.145-9.238-.399a113.647 113.647 0 0 1-3.957-6.332 114.144 114.144 0 0 1-4.004-7.59c1.21-2.52 2.547-5.074 4.023-7.633a113.024 113.024 0 0 1 5.137-8.07c2.605-.191 5.289-.308 8.039-.308zm13.098.8c3.297.41 6.39.985 9.273 1.668a89.834 89.834 0 0 1-3.183 8.75 121.53 121.53 0 0 0-2.614-4.804 121.368 121.368 0 0 0-3.476-5.614zm-26.41.032a122.083 122.083 0 0 0-3.399 5.503 119.874 119.874 0 0 0-2.652 4.868 89.736 89.736 0 0 1-3.16-8.7 86.127 86.127 0 0 1 9.21-1.671zm39.64 2.699c1.418.43 2.785.875 4.043 1.367 3.82 1.492 6.844 3.258 8.8 5.066 1.958 1.809 2.81 3.532 2.81 5.203 0 1.672-.852 3.395-2.81 5.204-1.956 1.808-4.98 3.574-8.8 5.066-1.394.547-2.93 1.04-4.523 1.508-1.137-3.516-2.59-7.188-4.317-10.934 1.985-4.3 3.59-8.496 4.797-12.48zm-52.723.02c1.192 3.945 2.778 8.097 4.735 12.355-1.738 3.77-3.2 7.457-4.34 10.996-1.54-.457-3.02-.938-4.371-1.465-3.82-1.492-6.844-3.258-8.8-5.066-1.958-1.809-2.81-3.532-2.81-5.203 0-1.672.852-3.395 2.81-5.204 1.956-1.808 4.98-3.574 8.8-5.066 1.238-.484 2.582-.926 3.976-1.348zM50 40c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM30.684 54.73c.84 1.625 1.714 3.258 2.66 4.891a123.476 123.476 0 0 0 2.258 3.746 84.92 84.92 0 0 1-7.637-1.402 93.113 93.113 0 0 1 2.719-7.235zm38.554 0a93.556 93.556 0 0 1 2.727 7.25 85.503 85.503 0 0 1-7.66 1.399 114.722 114.722 0 0 0 2.289-3.793 119.25 119.25 0 0 0 2.644-4.856zM26.813 65.848c3.62.859 7.542 1.515 11.703 1.945 2.777 4.016 5.672 7.625 8.582 10.781-1.301 1.27-2.594 2.461-3.856 3.489-3.25 2.644-6.332 4.44-8.902 5.273-2.57.832-4.485.723-5.914-.102-1.43-.824-2.48-2.43-3.043-5.07-.563-2.64-.547-6.207.117-10.344.3-1.879.754-3.886 1.313-5.972zm46.308.015c.567 2.098 1.016 4.117 1.32 6.004.664 4.14.684 7.711.118 10.36-.567 2.648-1.621 4.27-3.063 5.101-1.441.832-3.375.942-5.953.106-2.578-.836-5.66-2.633-8.914-5.282-1.274-1.035-2.57-2.234-3.883-3.515 2.93-3.168 5.844-6.797 8.64-10.836 4.173-.426 8.106-1.082 11.735-1.938zm-29.387 2.34c2.055.113 4.133.188 6.266.188 2.063 0 4.074-.07 6.063-.176a92.227 92.227 0 0 1-6.168 7.48 92.442 92.442 0 0 1-6.16-7.492zm0 0"
    />
  </svg>
);

export default SVGComponent;
