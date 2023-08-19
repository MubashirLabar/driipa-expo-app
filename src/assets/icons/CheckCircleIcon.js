import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CheckCircleIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <Path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4.962-3.787a.937.937 0 0 0-1.35.027l-4.342 5.531-2.616-2.617a.937.937 0 0 0-1.325 1.325l3.308 3.309a.939.939 0 0 0 1.348-.026l4.99-6.237a.938.938 0 0 0-.012-1.313h-.002Z" />
  </Svg>
);
export default CheckCircleIcon;
