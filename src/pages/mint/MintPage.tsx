import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { useEthers } from "@usedapp/core";
import { BigNumber } from "ethers";

import MintConfirmation from "./MintConfirmation";
import MintSection from "./MintSection";
import MintHomeButton from "./MintHomeButton";
import MintError from "./MintError";
import MintLoading from "./MintLoading";
import MintSoldOut from "./MintSoldOut";
import {
  useMintFirstOrb,
  useMintFree,
  useMintHolders,
  useMintSecondOrb,
} from "../../contracts/functions";
import {
  useHasFreeMint,
  usePrice,
  useSoldOut,
  useStage,
} from "../../contracts/views";
import MintPending from "./MintPending";

import footerLeft from "../../assets/mint/footer-left.svg";
import footerRight from "../../assets/mint/footer-right.svg";
import bg from "../../assets/mint/mint-bg.svg";
import illustration from "../../assets/mint/illustration.png";

import freeProofs from "../../contracts/freeProofs.json";
import firstOrbProofs from "../../contracts/firstOrbProofs.json";
import secondOrbProofs from "../../contracts/secondOrbProofs.json";
import { selectError } from "../../state/errorSlice";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledMintPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 83rem;
  max-width: 170rem;

  @media only screen and (max-width: 600px) {
    max-height: none;
    max-width: none;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  clip-path: polygon(
    1.5% 0%,
    98.5% 0%,
    100% 3%,
    100% 97%,
    98.5% 100%,
    1.5% 100%,
    0% 97%,
    0% 3%
  );
  @media only screen and (max-width: 600px) {
    clip-path: none;
  }
`;

const IllustrationSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background: #4b6595;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const IllustrationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Illustration = styled.img`
  height: calc(100% + 8rem);
  transform: translate(-1.3rem, 0.5rem);
`;

const Separator = styled.div`
  height: 100%;
  width: 1.2rem;
  background: #afcaec;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MainSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background: #90a8d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1;
`;

const Background = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: calc(100% - 4rem);
  filter: brightness(100);
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Copywrite = styled.img`
  height: 3rem;
`;

const Barcode = styled.img`
  height: 3rem;
`;

const FreeMint = styled.button`
  position: absolute;
  right: 3rem;
  height: 4.2rem;
  top: 8rem;
  height: 4.2rem;
  background: #ff6280;
  padding: 0 2.4rem;
  color: white;
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;

  clip-path: polygon(
    6% 0%,
    94% 0%,
    100% 25%,
    100% 75%,
    94% 100%,
    6% 100%,
    0% 75%,
    0% 25%
  );

  transition: filter 0.3s;
  :hover {
    filter: brightness(0.9);
  }
`;

const MintPage = () => {
  const { account } = useEthers();
  const [minted, setMinted] = useState(0);
  const [amount, setAmount] = useState<number | null>(null);

  const stage = useStage();
  const hasFreeMint = useHasFreeMint();
  const { mintFirstOrbState, mintFirstOrb } = useMintFirstOrb();
  const { mintSecondtOrbState, mintSecondOrb } = useMintSecondOrb();
  const { mintHoldersState, mintHolders } = useMintHolders();
  const { mintFreeState, mintFree } = useMintFree();
  const price = usePrice();

  const errorText = useSelector(selectError);
  const soldOut = useSoldOut();

  const loading =
    mintFreeState.status === "Mining" ||
    mintFreeState.status === "PendingSignature" ||
    mintFirstOrbState.status === "Mining" ||
    mintFirstOrbState.status === "PendingSignature" ||
    mintSecondtOrbState.status === "Mining" ||
    mintSecondtOrbState.status === "PendingSignature" ||
    mintHoldersState.status === "Mining" ||
    mintHoldersState.status === "PendingSignature";

  const showIllustration = !errorText && !loading && !soldOut;
  const success =
    mintFreeState.status === "Success" ||
    mintFirstOrbState.status === "Success" ||
    mintSecondtOrbState.status === "Success" ||
    mintHoldersState.status === "Success";

  const hash =
    mintFreeState?.transaction?.hash ||
    mintFirstOrbState?.transaction?.hash ||
    mintSecondtOrbState?.transaction?.hash ||
    mintHoldersState?.transaction?.hash ||
    "";

  useEffect(() => {
    if (success) {
      if (amount) setMinted(amount);
      setAmount(null);
      return;
    }
    if (!loading) {
      setAmount(null);
    }
  }, [loading, success]);

  const mintFreeeee = () => {
    if (loading) return;
    if (!account) return;
    const data = (freeProofs as any)[account];
    if (!data || !data.Amount) return;
    mintFree(data.Amount, data.Amount, data.Proof);
  };

  const mint = () => {
    if (loading) return;
    if (!account) return;
    if (stage === "one") {
      const data = (firstOrbProofs as any)[account];
      if (!data || !data.Amount) return;
      mintFirstOrb(amount, data.Amount, data.Proof, {
        value: price.mul(BigNumber.from(amount)),
      });
    }
    if (stage === "two") {
      const data = (secondOrbProofs as any)[account];
      if (!data || !data.Amount) return;
      mintSecondOrb(amount, data.Amount, data.Proof, {
        value: price.mul(BigNumber.from(amount)),
      });
    }
    if (stage === "three") {
      mintHolders(amount, {
        value: price.mul(BigNumber.from(amount)),
      });
    }
  };

  return (
    <>
      <StyledMintPage>
        <Container>
          <Content>
            <IllustrationSection />
            <Separator />
            <MainSection>
              <Background src={bg} alt="mint background image" />
              {minted === 0 && (
                <MintSection
                  amount={amount}
                  setAmount={(v: number | null) => setAmount(v)}
                  action={() => mint()}
                />
              )}
              {minted > 0 && (
                <MintConfirmation amount={minted} close={() => setMinted(0)} />
              )}
              <Footer>
                <Copywrite src={footerLeft} alt="Footer illustration" />
                <Barcode src={footerRight} alt="Footer illustration" />
              </Footer>
              {!account && <Overlay />}
            </MainSection>
            <MintError />
            <MintLoading show={loading} hash={hash} />
            {hasFreeMint && minted === 0 && !soldOut && (
              <FreeMint onClick={mintFreeeee}>{"<freemint.exe>"}</FreeMint>
            )}
          </Content>
          {showIllustration && (
            <IllustrationContainer>
              <MintHomeButton />
              <Illustration src={illustration} alt="Illustration" />
            </IllustrationContainer>
          )}
        </Container>
      </StyledMintPage>
      <MintPending />
      <MintSoldOut />
    </>
  );
};

export default MintPage;
