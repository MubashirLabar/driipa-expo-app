import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TwitterIcon = ({ width = 20, height = 20, color = "#000", ...rest }) => (
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
      d="M18.51 4.713a6.986 6.986 0 0 1-2.001.549 3.496 3.496 0 0 0 1.532-1.929 6.954 6.954 0 0 1-2.213.846A3.485 3.485 0 0 0 9.89 7.358a9.895 9.895 0 0 1-7.183-3.642A3.484 3.484 0 0 0 3.785 8.37a3.474 3.474 0 0 1-1.579-.436v.043a3.487 3.487 0 0 0 2.796 3.418 3.502 3.502 0 0 1-1.575.06 3.488 3.488 0 0 0 3.256 2.42 6.995 6.995 0 0 1-5.16 1.444 9.86 9.86 0 0 0 5.342 1.565c6.411 0 9.917-5.31 9.917-9.915 0-.151-.004-.302-.01-.451a7.08 7.08 0 0 0 1.738-1.804Z"
    />
  </Svg>
);
export default TwitterIcon;
