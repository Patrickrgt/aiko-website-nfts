import { ReactNode } from "react";

const Fade = require("react-reveal/Fade");

interface Props {
  children: ReactNode;
}

const AikoFade = ({ children }: Props) => {
  return <Fade>{children}</Fade>;
};

export default AikoFade;
