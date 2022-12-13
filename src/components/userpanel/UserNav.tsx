import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEthers, useLookupAddress } from "@usedapp/core";

import JumboStampSystem from "./JumboStampSystem";
import UserProfile from "./UserProfile";

import UserNavIcon, { NavIconType } from "./UserNavIcon";
import UserNavSocial, { SocialIconType } from "./UserNavSocial";
import { selectShowingNav, setShowingNav } from "../../state/uiSlice";

import logo from "../../assets/userpanel/logo.png";
import map from "../../assets/userpanel/buttonmap.png";
import lobby from "../../assets/userpanel/buttonlobby.png";
import lore from "../../assets/userpanel/buttonlore.png";
import news from "../../assets/userpanel/buttonnews.png";

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

const NavContainer = styled.div`
  width: 100%;
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

const NavLogo = styled.img`
  position: relative;
  padding-left: 2rem;
  margin-right: 2rem;
  top: 2rem;
  width: 12%;
`;

const NavIconContainer = styled.div`
  z-index: 1;
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

interface NavProps {
  active?: boolean;
  account?: any;
}

const UserNav = () => {
  return (
    <NavContainer>
      <Triangle />
      <NavBackground>
        <NavBackgroundDecor>
          <Stripes />
        </NavBackgroundDecor>
      </NavBackground>

      <NavLogo src={logo} />

      <NavIconContainer>
        {navIcons.map((navIcon: NavIconType) => (
          <UserNavIcon key={navIcon.name} navIcon={navIcon} />
        ))}
      </NavIconContainer>

      <NavWalletRewardsContainer>
        <UserProfile />
      </NavWalletRewardsContainer>
    </NavContainer>
  );
};

export default UserNav;
