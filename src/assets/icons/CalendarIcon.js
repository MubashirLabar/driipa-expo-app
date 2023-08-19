import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CalendarIcon = ({ size = 20, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <Path d="M6.375 2A.625.625 0 0 1 7 2.625v.625h10v-.625a.625.625 0 1 1 1.25 0v.625h1.25a2.5 2.5 0 0 1 2.5 2.5V19.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5V5.75a2.5 2.5 0 0 1 2.5-2.5h1.25v-.625A.625.625 0 0 1 6.375 2ZM3.25 7v12.5a1.25 1.25 0 0 0 1.25 1.25h15a1.25 1.25 0 0 0 1.25-1.25V7H3.25Z" />
  </Svg>
);
export default CalendarIcon;
