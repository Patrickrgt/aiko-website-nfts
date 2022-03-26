import styled from "styled-components";
import Social from "./Social";
import twitter from "../assets/svgs/twitter.svg";
import discord from "../assets/svgs/discord.svg";
import opensea from "../assets/svgs/opensea.svg";

interface SocialType {
  icon: string;
  link: string;
}

const socials: SocialType[] = [
  {
    icon: opensea,
    link: "/",
  },
  {
    icon: discord,
    link: "https://discord.gg/g6V5SxQFV8",
  },
  {
    icon: twitter,
    link: "https://twitter.com/aikovirtual",
  },
];

const StyledSocials = styled.div`
  position: fixed;
  transform: translate(0, 0);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  z-index: 3;

  top: 7rem;
  left: 7rem;

  @media only screen and (max-width: 1400px) {
    top: 3rem;
    left: 3rem;
  }

  @media only screen and (max-width: 600px) {
    top: 1.5rem;
    left: 1.5rem;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((social: SocialType) => (
        <Social icon={social.icon} link={social.link} />
      ))}
    </StyledSocials>
  );
};

export default Socials;
