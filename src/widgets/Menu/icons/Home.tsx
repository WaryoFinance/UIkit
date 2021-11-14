import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="m89.455 28.258h11.74v25.334h-11.74z" fill="#d3a46a"/><path d="m119 67.517-6.793 7.527-6.374-5.753-41.833-37.727-41.833 37.727-6.374 5.753-6.793-7.527 55-49.614z" fill="#e95a6a"/><path d="m105.833 69.291v40.806h-83.666v-40.806l41.833-37.727z" fill="#e1b378"/><path d="m105.836 69.287v6.337l-41.833-37.727-41.833 37.727v-6.337l41.833-37.727z" fill="#d3a46a"/><path d="m64 76.18a12.606 12.606 0 0 0 -12.606 12.607v21.313h25.212v-21.313a12.606 12.606 0 0 0 -12.606-12.607z" fill="#3d4c70"/><rect fill="#e1b378" height="7.786" rx=".878" width="18.02" x="86.316" y="24.774"/>
    </Svg>
  );
};

export default Icon;
