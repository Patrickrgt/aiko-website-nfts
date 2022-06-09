import MintOverlay from "./MintOverlay";

import loading from "../../assets/mint/loading.svg";

const MintLoading = () => {
  return (
    <MintOverlay
      asset={loading}
      header="Wait a little bit..."
      body="Your transaction is being processed!"
      buttonText="View on Etherscan"
      buttonAction={() => console.log("Meow")}
    />
  );
};

export default MintLoading;
