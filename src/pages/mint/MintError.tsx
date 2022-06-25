import { useDispatch, useSelector } from "react-redux";

import MintOverlay from "./MintOverlay";
import error from "../../assets/mint/error-illustration.svg";
import { clearError, selectError } from "../../state/errorSlice";

const MintError = () => {
  const dispatch = useDispatch();
  const errorText = useSelector(selectError);

  return (
    <MintOverlay
      show={!!errorText}
      asset={error}
      header="Error"
      body="Oops, something went wrong! Please try again"
      buttonText="Ok"
      buttonAction={() => dispatch(clearError())}
      exit={() => dispatch(clearError())}
    />
  );
};

export default MintError;
