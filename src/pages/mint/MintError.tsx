import MintOverlay from "./MintOverlay";

import error from "../../assets/mint/error-illustration.svg";

interface Props {
  show: boolean;
  close: () => void;
}

const MintError = ({ show, close }: Props) => {
  return (
    <MintOverlay
      show={show}
      asset={error}
      header="Error"
      body="Oops, something went wrong! Please try again"
      buttonText="Ok"
      buttonAction={close}
      exit={close}
    />
  );
};

export default MintError;
