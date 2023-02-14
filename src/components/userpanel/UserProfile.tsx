import { ReactNode, useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useEthers, useLookupAddress, useCall } from "@usedapp/core";
import { utils, constants, BigNumber, Contract as CTR } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useBalanceOf, getAikoHoldings } from "../../contracts/views";
import {
  setShowingNfts,
  selectGlobalNft,
  setGlobalAccount,
} from "../../state/uiSlice";

import aikostamps from "../../contracts/aikostamps.json";

import UserNavSocial, { SocialIconType } from "./UserNavSocial";

import JumboStampSystem from "./JumboStampSystem";

import logo from "../../assets/userpanel/logo.png";
import meepocoin from "../../assets/userpanel/meepocoin.png";
import star from "../../assets/userpanel/stampstar.png";
import baseaiko from "../../assets/userpanel/aikopfp.gif";

import opensea from "../../assets/svgs/opensea.svg";
import twitter from "../../assets/svgs/twitter.svg";
import home from "../../assets/userpanel/homewebsiteicon.png";
import medium from "../../assets/svgs/medium.svg";

import cursorhover from "../../assets/userpanel/cursorhover.png";

import soundHoverTab from "../../assets/userpanel/Market_SFX_-_TAB_HOVER.wav";
import soundClickTab from "../../assets/userpanel/Market_SFX_-_TAB_PRESS.wav";

const socialIcons: SocialIconType[] = [
  {
    image: twitter,
    name: "Twitter",
    link: "https://twitter.com/aikovirtual",
  },
  {
    image: opensea,
    name: "OpenSea",
    link: "https://opensea.io/collection/aikovirtual",
  },
  {
    image: home,
    name: "Homepage",
    link: "https://aikovirtual.com/",
  },
  {
    image: medium,
    name: "Medium",
    link: "https://medium.com/@aikovirtual",
  },
];

const NavUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
`;

const NavUserWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  /* background-color: black; */
  align-items: flex-end;
`;

const NavUsernameContainer = styled.div`
  position: relative;
  top: 3rem;
  right: 2rem;
  background-color: #8ca3e7;
  clip-path: var(--notched-sm);
  padding: 1rem 3rem 1rem 1rem;
  text-align: left;
  width: fit-content;
  height: 4rem;
  overflow: visible;
  margin-left: auto;
  z-index: 1;
  opacity: ${(props: NavProps) => (props.active ? "1" : "0")};
  transition: all ease 0.3s;
`;

const PreNavUsername = styled.div`
  font-size: 2.5rem;
  color: white;
  text-shadow: -2px 2px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  opacity: ${(props: NavProps) => (props.active ? "1" : "0")};
  transition: all ease 0.3s;
`;

const PostNavUsername = styled.div`
  font-size: 2.5rem;
  color: white;
  text-shadow: -2px 2px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  transition: all ease 0.3s;
`;

const PreNavWallet = styled.button`
  width: fit-content;
  cursor: url(${cursorhover}), auto;
  background-color: #fff4cb;
  clip-path: var(--notched-sm);
  padding: 4rem 4rem 1rem 2rem;
  transform: ${(props: NavProps) =>
    props.active ? "translate(10%, 0px)" : "translate(60%, 0)"};
  transition: all ease 0.3s;
`;

const PreNavWalletText = styled.p`
  transition: all ease 0.3s;
  font-size: 2rem;
  opacity: ${(props: NavProps) => (props.active ? "1" : "0")};
`;

const PostNavWallet = styled.button`
  cursor: url(${cursorhover}), auto;
  background-color: #fff4cb;
  clip-path: var(--notched-sm);
  padding: 4rem 4rem 1rem 2rem;
  transform: translate(10%, 0px);
  transition: all ease 0.3s;
`;

const PostNavWalletText = styled.p`
  transition: all ease 0.3s;
  font-size: 2rem;
  /* opacity: ${(props: NavProps) => (props.active ? "1" : "0")}; */
`;

const MeeposCollected = styled.div`
  clip-path: var(--notched-sm);
  width: 100%;
  display: flex;
  background-color: #619ee2;
  justify-content: space-around;
  margin-top: 1rem;
  padding: 1rem 1rem 0.25rem 1rem;
`;

const MeeposCollectedText = styled.p`
  font-size: 3rem;
  color: white;
  flex: 1 0;
`;

const MeeposCollectedStar = styled.img`
  position: relative;
  bottom: 0.5rem;
  width: 25px;
`;

const StampsCollected = styled.div`
  clip-path: var(--notched-sm);
  width: 100%;
  display: flex;
  background-color: #ffcb5a;
  justify-content: space-around;
  margin-top: 1rem;
  padding: 1rem 1rem 0.25rem 1rem;
`;

const StampsCollectedText = styled.p`
  font-size: 3rem;
  color: white;
  flex: 1 0;
`;

const StampsCollectedStar = styled.img`
  position: relative;
  bottom: 0.5rem;
  width: 25px;
`;

const DecorHorizontalContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const DecorHorizontalDots = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 30px;
  margin-right: 1rem;
  background-color: #b2bcc3;
`;

const DecorHorizontalDots2 = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 30px;
  margin-right: 1rem;
  background-color: #b2bcc3;
`;
const DecorHorizontalDots3 = styled.span`
  width: 100%;
  height: 1.5rem;
  border-radius: 30px;
  background-color: #b2bcc3;
`;

const NavUserPfpContainer = styled.div`
  cursor: url(${cursorhover}), auto;
  margin-top: 2rem;
  clip-path: var(--notched-md);
  background-color: #393939;
  padding: 0.25rem 0.25rem 1.25rem 0.25rem;
`;

const NavUserPfp = styled.img`
  filter: opacity(90%);
  filter: hue-rotate(10deg);
  clip-path: var(--notched-md);
  width: 150px;
  height: 150px;
`;

const NavUserStats = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavUserSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavUserSocialShadow = styled.div`
  clip-path: var(--notched-sm);
  background-color: #393939;
  width: fit-content;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
`;

const NavUserSocial = styled.img`
  width: fit-content;
  clip-path: var(--notched-sm);
`;

interface NavProps {
  active?: boolean;
  account?: any;
}

const UserProfile = () => {
  const [hoverActive, setHoverActive] = useState(false);
  const nftPfp = useSelector(selectGlobalNft);
  const { activateBrowserWallet, account } = useEthers();
  const { ens } = useLookupAddress(account);
  const dispatch = useDispatch();

  const [stampsHeld, setStampsHeld] = useState(0);
  const stamps = useBalanceOf();
  const aikos = getAikoHoldings();

  const audioHoverTab = useRef<HTMLAudioElement>(null);
  const audioClickTab = useRef<HTMLAudioElement>(null);

  const playHoverAudio = () => {
    if (audioHoverTab.current) {
      audioHoverTab.current.currentTime = 0;
      audioHoverTab.current.play();
    }
  };

  const playClickAudio = () => {
    if (audioClickTab.current) {
      audioClickTab.current.currentTime = 0;
      audioClickTab.current.play();
    }
  };

  useEffect(() => {
    if (account) {
      dispatch(setGlobalAccount(account));
    }
  }, [account]);

  useEffect(() => {
    if (stamps) {
      setStampsHeld(stamps.reduce((total, current) => total + current, 0));
    }
  }, [stamps]);

  useEffect(() => {
    let aikosPfpList = null;
    if (aikos) {
      aikos.then((res) => {
        aikosPfpList = res;
      });
    }
  }, [aikos]);

  return (
    <NavUserContainer>
      <audio ref={audioHoverTab} src={soundHoverTab}>
        <track kind="captions" />
      </audio>
      <audio ref={audioClickTab} src={soundClickTab}>
        <track kind="captions" />
      </audio>
      <NavUserWalletContainer>
        <NavUsernameContainer active={hoverActive}>
          {!ens && <PostNavUsername>A:\Welcome</PostNavUsername>}
          {ens && (
            <PostNavUsername>{`A:\\ ${ens.substr(
              0,
              ens.length - 4
            )}`}</PostNavUsername>
          )}
        </NavUsernameContainer>

        {!account && (
          <PreNavWallet
            onMouseEnter={() => {
              setHoverActive(true);
              playHoverAudio();
            }}
            onMouseLeave={() => setHoverActive(false)}
            active={hoverActive}
            onClick={() => {
              activateBrowserWallet();
              playClickAudio();
            }}
          >
            {/* 0x1205...2aF4D */}
            <PreNavWalletText active={hoverActive}>
              Connect Wallet
            </PreNavWalletText>
          </PreNavWallet>
        )}

        {account && (
          <PostNavWallet>
            <PostNavWalletText>
              {`${account.substr(0, 6)}\u2026${account.substr(
                account.length - 5
              )}`}
            </PostNavWalletText>
          </PostNavWallet>
        )}

        <JumboStampSystem />
      </NavUserWalletContainer>

      <NavUserStats>
        <NavUserPfpContainer>
          {!account && (
            <NavUserPfp
              onMouseEnter={() => {
                setHoverActive(true);
                playHoverAudio();
              }}
              onMouseLeave={() => setHoverActive(false)}
              onClick={() => {
                activateBrowserWallet();
                playClickAudio();
              }}
              src={baseaiko}
            />
          )}
          {account && (
            <NavUserPfp
              onClick={() => {
                dispatch(setShowingNfts(true));
              }}
              src={nftPfp}
            />
          )}
        </NavUserPfpContainer>

        <MeeposCollected>
          {account && <StampsCollectedText>0</StampsCollectedText>}
          <MeeposCollectedStar src={meepocoin} />
        </MeeposCollected>

        <StampsCollected>
          {account && (
            <StampsCollectedText>{`${stampsHeld}/12`}</StampsCollectedText>
          )}

          <StampsCollectedStar src={star} />
        </StampsCollected>

        <DecorHorizontalContainer>
          <DecorHorizontalDots />
          <DecorHorizontalDots2 />
          <DecorHorizontalDots3 />
        </DecorHorizontalContainer>

        <NavUserSocialsContainer>
          {socialIcons.map((socialIcon: SocialIconType) => (
            <UserNavSocial key={socialIcon.name} socialIcon={socialIcon} />
          ))}
        </NavUserSocialsContainer>
      </NavUserStats>
    </NavUserContainer>
  );
};

export default UserProfile;
