import * as React from "react";
import Svg, { Path } from "react-native-svg";
const GoogleIcon = ({ width = 20, height = 20, color = "#000", ...rest }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      fill={color}
      d="M2.553 6.257A8.33 8.33 0 0 1 10 1.667c2.246 0 4.132.825 5.576 2.17l-2.39 2.39c-.864-.826-1.963-1.246-3.186-1.246-2.17 0-4.008 1.466-4.663 3.435A5.008 5.008 0 0 0 5.076 10c0 .55.094 1.083.261 1.583.655 1.97 2.492 3.436 4.663 3.436 1.121 0 2.076-.296 2.822-.796a3.834 3.834 0 0 0 1.663-2.515H10V8.485h7.848c.099.545.152 1.113.152 1.704 0 2.538-.91 4.674-2.485 6.125-1.379 1.273-3.265 2.02-5.515 2.02A8.33 8.33 0 0 1 1.667 10a8.33 8.33 0 0 1 .886-3.743Z"
    />
  </Svg>
);
export default GoogleIcon;
