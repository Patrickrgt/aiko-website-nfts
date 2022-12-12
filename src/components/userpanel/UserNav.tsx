import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEthers, useLookupAddress } from "@usedapp/core";

import JumboStampSystem from "./JumboStampSystem";

import UserNavIcon, { NavIconType } from "./UserNavIcon";
import UserNavSocial, { SocialIconType } from "./UserNavSocial";
import { selectShowingNav, setShowingNav } from "../../state/uiSlice";

import logo from "../../assets/userpanel/logo.png";
import meepocoin from "../../assets/userpanel/meepocoin.png";
import star from "../../assets/userpanel/stampstar.png";

import map from "../../assets/userpanel/buttonmap.png";
import lobby from "../../assets/userpanel/buttonlobby.png";
import lore from "../../assets/userpanel/buttonlore.png";
import news from "../../assets/userpanel/buttonnews.png";

import opensea from "../../assets/svgs/opensea.svg";
import twitter from "../../assets/svgs/twitter.svg";
import home from "../../assets/userpanel/homewebsiteicon.png";

// interface NavProps {
//   nav?: boolean;
// }

const navIcons: NavIconType[] = [
  {
    image: map,
    name: "A:\\Map",
  },
  {
    image: lore,
    name: "A:\\Lore",
  },
  {
    image: news,
    name: "A:\\News",
  },
  {
    image: lobby,
    name: "A:\\Lobby",
  },
];

const socialIcons: SocialIconType[] = [
  {
    image: twitter,
    name: "Twitter",
  },
  {
    image: opensea,
    name: "OpenSea",
  },
  {
    image: home,
    name: "Homepage",
  },
];

const NavContainer = styled.div`
  width: 100%;
  /* display: flex;
  align-items: flex-start; */
  z-index: 2;
`;

const NavBackground = styled.div`
  background-color: #dfe7f4;
  height: 10%;
  width: 100%;
  position: absolute;
`;

const NavBackgroundDecor = styled.div`
  background-color: #dfe7f4;
  height: 10%;
  width: 20%;
  position: fixed;
`;

const Triangle = styled.span`
  position: absolute;
  top: 0;
  height: 20%;
  width: 13.333%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #dfe7f4;
  clip-path: polygon(
    0% 0px,
    /* top left */ 0% 0%,
    /* top right */ 100% 0%,
    /* bottom right */ 0% 100%,
    /* bottom left */ 0% 100% /* bottom left */
  );
`;

const Stripes = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #658ac7;
  clip-path: polygon(
    15% 0px,
    /* top left */ 70% 0%,
    /* top right */ 100% 100%,
    /* bottom right */ 100% 100%,
    /* bottom left */ 45% 100% /* bottom left */
  );

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #f0a460;
    clip-path: polygon(
      30% 0px,
      /* top left */ 60% 0%,
      /* top right */ 92% 100%,
      /* bottom right */ 100% 100%,
      /* bottom left */ 50% 100% /* bottom left */
    );
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    background-color: #ffd36a;
    clip-path: polygon(
      0% 0,
      /* top left */ 35% 0%,
      /* top right */ 65% 100%,
      /* bottom right */ 45% 100%,
      /* bottom left */ 15% 0% /* bottom left */
    );
  }
`;

// const NavBackgroundShape = styled.div`
//   background-color: #dfe7f4;
//   height: 10%;
//   width: 10%;
//   position: absolute;
// `;

const NavStripes = styled.div``;

const NavLogo = styled.img`
  position: relative;
  padding-left: 2rem;
  margin-right: 2rem;
  top: 2rem;
  cursor: pointer;
  width: 12%;
`;

const NavIconContainer = styled.div`
  z-index: 100;
  /* position: relative; */
  top: 3rem;
  display: inline-flex;
  position: absolute;
  width: fit-content;
  height: fit-content;
  clip-path: var(--notched-sm);
`;

const NavWalletRewardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

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
  cursor: pointer;
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
  cursor: pointer;
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
  /* position: relative;
  top: 2rem; */
  cursor: pointer;
  margin-top: 2rem;
  clip-path: var(--notched-md);
  background-color: #393939;
  padding: 0.25rem 0.25rem 1.25rem 0.25rem;
`;

const NavUserPfp = styled.img`
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

const UserNav = () => {
  const [hoverActive, setHoverActive] = useState(false);

  const { activateBrowserWallet, account } = useEthers();
  const { ens } = useLookupAddress(account);

  const [navActive, setActive] = useState(false);

  return (
    <NavContainer>
      <Triangle />
      <NavBackground>
        <NavBackgroundDecor>
          <Stripes />
        </NavBackgroundDecor>
      </NavBackground>
      {/* <NavBackgroundShape /> */}

      <NavLogo src={logo} />

      <NavIconContainer>
        {navIcons.map((navIcon: NavIconType) => (
          <UserNavIcon key={navIcon.name} navIcon={navIcon} />
        ))}
      </NavIconContainer>

      <NavWalletRewardsContainer>
        <NavUserContainer>
          <NavUserWalletContainer>
            <NavUsernameContainer active={hoverActive}>
              {!ens && <PostNavUsername>A:\Welcome</PostNavUsername>}
              {/* {!ens && <PreNavUsername active={hoverActive} />} */}
              {ens && (
                <PostNavUsername>{`A:\\ ${ens.substr(
                  0,
                  ens.length - 4
                )}`}</PostNavUsername>
              )}
            </NavUsernameContainer>

            {!account && (
              <PreNavWallet
                onMouseEnter={() => setHoverActive(true)}
                onMouseLeave={() => setHoverActive(false)}
                active={hoverActive}
                onClick={() => activateBrowserWallet()}
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
                  )}`}{" "}
                </PostNavWalletText>
              </PostNavWallet>
            )}

            <JumboStampSystem />
          </NavUserWalletContainer>

          <NavUserStats>
            <NavUserPfpContainer>
              {!account && (
                <NavUserPfp
                  onMouseEnter={() => setHoverActive(true)}
                  onMouseLeave={() => setHoverActive(false)}
                  onClick={() => activateBrowserWallet()}
                  src="https://via.placeholder.com/175x125"
                />
              )}
              {account && (
                <NavUserPfp src="https://i.seadn.io/gae/R6xFSwTpGgo7JkoVa0Acvy3EGQqdTTh5uvT74BS9NHGsMYSeknz6iFljNHC6gGyqmK_laKlkUkRhcN43mJ_OLz4SdiW5yhEsmPFhhg?auto=format&w=1000" />
              )}
            </NavUserPfpContainer>

            <MeeposCollected>
              <MeeposCollectedText>20485</MeeposCollectedText>
              <MeeposCollectedStar src={meepocoin} />
            </MeeposCollected>

            <StampsCollected>
              <StampsCollectedText>4/12</StampsCollectedText>
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
      </NavWalletRewardsContainer>
    </NavContainer>
  );
};

export default UserNav;
