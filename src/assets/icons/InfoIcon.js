import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const InfoIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h15v15H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.04167)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC30lEQVRIidWVQWhcZRSFv/tmktgumgjNrIRCKoLgwlLTJkHKZBEM4qIg3ShutFIz02gnoQjS6h2DCNIwwWYmBXdFUHSjQkVBS9qFIWnEQi1R0JZuBI3Q6MI2TeY/LiYzTJP3prrs2byf//z/Oede3nsX7ndYK/LQoU9SmYeWnpGp12APYi+AYNHgB2ELmU6dc/fwvw1GCt5jpo8N620VQvCdWfq58uSJG3F8lCD+SgQ/GtaLmAtiJCjKrhnda0Z3UJQFyyHmDQbQ2tVcofjSf6ogV/CcGWXEKtjJ7k5NJrXA3aPlv+04UhGjI4iRmZKfSTQYPT6xO6xXrwjaI+ibLvliUmvuCjX+di8hzAGrUSr12PSpk9frXKNF7h5Vq9UPMbZh9laceH7ML+QKfnHzfmXyzUuYFc3YHkL1LKgRvGHw50rUb9CHmM/s0LuxUUXi25LZoXcQiwZP5l+b2LfFIEShH0DGmaSel0s+WCn5gTjO3QPiAwBFGthiYNBXC8lPSSnviVTtrpn661vpBin2Y1Bte2Ap7m5+zC8ABxCz5ZIPxp2J7rQvhbY7aCPsXRUIugC4eXstNl29/0Y2qYCOjrZ/NpZdWwzM+B0gvT21K+5yUupm3K7e6tkI89sWA8FCzSkM30soCULDAFbXajYw2ae1VXjZ3WN/IXXkC/7R5j13jzAdrhnVtZoMujv1ucTPZvbo8l/2QkLE2dqDnZup5RVeBB5BXM106lwjePOho+PFpyR9hbglMVCZ8sutKqkjd8wft4h5oD2IoZmSf1PnUs0HF+Zmf93XlxXGEMbzTwxklxbnZlt+F0fHis8KvjBjW8DemCn52WY+dh7kC34CYwJA8K3JytH6g1+ePv3qKsDo6PsdIX3zaZlGDQYBFPR6Zar43matxIGTHy8OKahixsOtKpD4JRJHpqf8fBzfcmS6e/qPFQ5iDAN7DXpkEtg1g+8V+DrTxWfuvt5K5/7Gv3k3GjWRKJxkAAAAAElFTkSuQmCC"
        id="b"
        width={24}
        height={24}
      />
    </Defs>
  </Svg>
);
export default InfoIcon;
