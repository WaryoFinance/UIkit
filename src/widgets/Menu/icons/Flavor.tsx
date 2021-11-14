import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <svg height="512pt" viewBox="-16 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m172.480469 160h-120.960938v-32l32-128h56.960938l32 128zm0 0" fill="#d7dee2"/><path d="m51.503906 128h-35.503906v96h192v-96zm0 0" fill="#b0b4b9"/><path d="m192 512h-160c-17.679688 0-32-14.320312-32-32v-288h224v288c0 17.679688-14.320312 32-32 32zm0 0" fill="#e76e54"/><path d="m428.480469 176h-120.960938v-48l32-128h56.960938l32 128zm0 0" fill="#d7dee2"/><path d="m307.503906 128h-35.503906v96h192v-96zm0 0" fill="#b0b4b9"/><path d="m448 512h-160c-17.679688 0-32-14.320312-32-32v-288h224v288c0 17.679688-14.320312 32-32 32zm0 0" fill="#fe9d58"/><g fill="#fff"><path d="m64 224.800781h32v31.199219h-32zm0 0"/><path d="m128 224.800781h32v31.199219h-32zm0 0"/><path d="m320 224.800781h32v31.199219h-32zm0 0"/><path d="m384 224.800781h32v31.199219h-32zm0 0"/></g><path d="m192 480h-160c-17.679688 0-32-14.320312-32-32v32c0 17.679688 14.320312 32 32 32h160c17.679688 0 32-14.320312 32-32v-32c0 17.679688-14.320312 32-32 32zm0 0" fill="#dd523c"/><path d="m448 480h-160c-17.679688 0-32-14.320312-32-32v32c0 17.679688 14.320312 32 32 32h160c17.679688 0 32-14.320312 32-32v-32c0 17.679688-14.320312 32-32 32zm0 0" fill="#f9873a"/></svg>
    </Svg>
  );
};

export default Icon;