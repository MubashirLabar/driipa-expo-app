import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AddIcon = ({ size = 39, color = "#fff" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      d="M19.5 0C8.73 0 0 8.73 0 19.5S8.73 39 19.5 39 39 30.27 39 19.5 30.27 0 19.5 0Zm9.75 21.45h-7.8v7.8h-3.9v-7.8h-7.8v-3.9h7.8v-7.8h3.9v7.8h7.8v3.9Z"
    />
  </Svg>
);
export default AddIcon;
