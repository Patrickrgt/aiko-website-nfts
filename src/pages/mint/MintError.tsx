import MintOverlay from "./MintOverlay";

import error from "../../assets/mint/error-illustration.svg";

interface Props {
  close: () => void;
}

const MintError = ({ close }: Props) => {
  return (
    <MintOverlay
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
