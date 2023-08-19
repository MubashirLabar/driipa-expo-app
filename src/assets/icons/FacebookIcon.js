import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FacebookIcon = ({ width = 20, height = 20, color = "#000", ...rest }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      fill={color}
      fillOpacity={0.8}
      d="M10 1.667A8.333 8.333 0 0 0 8.7 18.232v-5.823H6.583v-2.41h2.116V8.165c0-2.089 1.244-3.242 3.147-3.242.912 0 1.866.162 1.866.162v2.051H12.66c-1.035 0-1.358.643-1.358 1.302V10h2.311l-.37 2.409h-1.941v5.823A8.333 8.333 0 0 0 10 1.667Z"
    />
  </Svg>
);
export default FacebookIcon;
