import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 23 23"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-clock"
    {...props}
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zM12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1 3 3 .094.082a1 1 0 0 0 1.226 0l.094-.083.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6z" />
  </Svg>
);
export default SvgComponent;
