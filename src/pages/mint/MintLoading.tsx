import MintOverlay from "./MintOverlay";

import loading from "../../assets/mint/loading.svg";

const ETHERSCAN_URL = "https://etherscan.io/tx/";

interface Props {
  show: boolean;
  hash: string;
}

const MintLoading = ({ show, hash }: Props) => {
  return (
    <MintOverlay
      show={show}
      asset={loading}
      header="Wait a little bit..."
      body="Your transaction is being processed!"
      buttonText="View on Etherscan"
      buttonAction={() => (window as any).open(`${ETHERSCAN_URL}${hash}`)}
    />
  );
};

export default MintLoading;
