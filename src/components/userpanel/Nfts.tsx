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

const AikoShadow = styled.div`
  padding: 0.5rem 0.25rem 0.75rem 0.25rem;
  transition: background-color 0.2s;
  background-color: ${(props: NftProps) =>
    props.active ? "#363636;" : "#C6D0EB"};
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
  filter: ${(props: NftProps) => (props.active ? "" : "saturate(30%)")};
  background-size: 150px 150px;
`;

const Overlay = styled.div`
  visibility: ${(props: NftProps) => (props.selected ? `visible` : `hidden`)};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props: NftProps) =>
      props.selected ? `rgba(0, 132, 255, 0.5)` : ``};
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
    <AikoShadow active={active}>
      <Aiko
        pfp={aiko}
        active={active}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => {
          if (aiko) {
            dispatch(setGlobalNft(aiko));
          }
        }}
      />
      <Overlay selected={nftPfp === aiko} />
    </AikoShadow>
  );
};

export default Nfts;
