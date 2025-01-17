import React from "react";
import { SvgProps } from "../../../components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg id="Icons" height="512" viewBox="0 0 60 60" width="512" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m58 57v-29a1 1 0 0 0 -1-1h-54a1 1 0 0 0 -1 1v29z" fill="#cad0d7"/><path d="m45 13a1 1 0 0 1 1 1v41h-32v-41a1 1 0 0 1 1-1z" fill="#e4e8eb"/><path d="m19 40h22v16h-22z" fill="#cad0d7"/><path d="m23 41h14v14h-14z" fill="#4fc0e8"/><path d="m37 51c-5-1-7-8-7-8v12h7z" fill="#66d4f1"/><path d="m30 51c-5-1-7-8-7-8v12h7z" fill="#66d4f1"/><rect fill="#3aadd9" height="4" rx="1" width="4" x="6" y="31"/><rect fill="#4fc0e8" height="4" rx="1" width="5" x="18" y="24"/><rect fill="#4fc0e8" height="4" rx="1" width="6" x="27" y="24"/><rect fill="#4fc0e8" height="4" rx="1" width="5" x="37" y="24"/><g fill="#3aadd9"><rect height="4" rx="1" width="4" x="6" y="47"/><rect height="4" rx="1" width="4" x="6" y="39"/><rect height="4" rx="1" transform="matrix(-1 0 0 -1 104 66)" width="4" x="50" y="31"/><rect height="4" rx="1" transform="matrix(-1 0 0 -1 104 98)" width="4" x="50" y="47"/><rect height="4" rx="1" transform="matrix(-1 0 0 -1 104 82)" width="4" x="50" y="39"/></g><rect fill="#f76c82" height="18" rx="2" width="24" x="18" y="1"/><path d="m35 9v2a1 1 0 0 1 -1 1h-2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1-1v-2h-2a1 1 0 0 1 -1-1v-2a1 1 0 0 1 1-1h2v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1z" fill="#fff"/><rect fill="#a9b0bb" height="8" rx="1" width="24" x="18" y="33"/><rect fill="#636c77" height="4" rx="1" width="58" x="1" y="55"/><path d="m29 41h2v14h-2z" fill="#3aadd9"/></svg>
  );
};

export default Icon;
