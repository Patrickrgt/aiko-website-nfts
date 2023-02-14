import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";
import {
  selectShowingNfts,
  setShowingNfts,
  setGlobalNft,
  selectGlobalNft,
} from "../../state/uiSlice";

import { useBalanceOf, getAikoHoldings } from "../../contracts/views";

import cursorhover from "../../assets/userpanel/cursorhover.png";
import check from "../../assets/placeholders/check.png";

const AikoShadow = styled.div`
  padding: 0.5rem 0.25rem 0.75rem 0.25rem;
  transition: background-color 0.2s;
  background-color: ${(props: NftProps) =>
    props.active || props.selected ? "#363636;" : "#C6D0EB"};

  clip-path: var(--notched-md);
  margin: 1rem;
  position: relative;
`;

const Aiko = styled.div`
  max-width: 150px;
  max-height: 150px;
  min-width: 150px;
  min-height: 150px;
  position: relative;
  clip-path: var(--notched-md);
  transition: filter 0.2s;
  background-image: url(${(props) => props.pfp});
  filter: ${(props: NftProps) => (props.active ? "" : "")};
  background-size: 150px 150px;
  background-blend-mode: color;
`;

const Overlay = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props: NftProps) =>
      props.selected ? `rgba(0, 132, 255, 0.5)` : ``};
    transition: all 0.3s linear;
  }
`;

const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: drop-shadow(1px 1px 3px #4fc5f1) drop-shadow(-1px 1px 3px #4fc5f1)
    drop-shadow(1px -1px 3px #4fc5f1) drop-shadow(-1px -1px 3px #4fc5f1);
`;

const OverlayCheck = styled.img`
  opacity: ${(props: NftProps) => (props.selected ? 1 : 0)};
  transform: ${(props: NftProps) =>
    props.selected ? "translate(0, 0)" : "translate(0, 40px)"};
  transition: all 0.2s cubic-bezier(1, 0, 0, 1);
  width: 50px;
  width: 50px;
  margin-bottom: 6px;
  filter: invert(1) drop-shadow(1px 1px 0 black) drop-shadow(-1px 1px 0 black)
    drop-shadow(1px -1px 0 black) drop-shadow(-1px -1px 0 black);
`;

const OverlayText = styled.div`
  opacity: ${(props: NftProps) => (props.selected ? 1 : 0)};
  transform: ${(props: NftProps) =>
    props.selected ? "translate(0, 0)" : "translate(0, 40px)"};
  transition: all 0.2s cubic-bezier(1, 0, 0, 1);
  &:before {
    content: "In Use";
    font-size: 2.25rem;
    text-shadow: -3px -3px 0 #000, 0 -3px 0 #000, 3px -3px 0 #000, 3px 0 0 #000,
      3px 3px 0 #000, 0 3px 0 #000, -3px 3px 0 #000, -3px 0 0 #000;
    color: white;
    position: relative;
    z-index: 100;
  }
`;

interface NftProps {
  pfp?: string;
  show?: boolean;
  active?: boolean;
  selected?: boolean;
}

interface Props {
  aiko?: string;
}

const Nfts = ({ aiko }: Props) => {
  const aikos = getAikoHoldings();
  const [aikoList, setAikoList] = useState([""]);
  const [active, setActive] = useState(false);

  const showing = useSelector(selectShowingNfts);
  const nftPfp = useSelector(selectGlobalNft);
  const dispatch = useDispatch();

  const [stampsHeld, setStampsHeld] = useState(0);
  const stamps = useBalanceOf();

  return (
    <AikoShadow active={active} selected={nftPfp === aiko}>
      <Aiko
        selected={nftPfp === aiko}
        pfp={aiko}
        active={active}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => {
          if (aiko) {
            dispatch(setGlobalNft(aiko));
          }
        }}
      >
        <Overlay selected={nftPfp === aiko} />
        <OverlayContainer>
          <OverlayCheck src={check} selected={nftPfp === aiko} />
          <OverlayText selected={nftPfp === aiko} />
        </OverlayContainer>
      </Aiko>
    </AikoShadow>
  );
};

export default Nfts;
