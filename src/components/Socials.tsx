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
    link: "https://discord.gg/CaR7RhfDZ6",
  },
  {
    icon: discord,
    link: "https://discord.gg/CaR7RhfDZ6",
  },
  {
    icon: twitter,
    link: "https://twitter.com/ChaseManning_NZ",
  },
];

const StyledSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  position: absolute;
  top: 0;
  left: 7rem;
`;

interface Props {
  index: number;
}

const Socials = ({ index }: Props) => {
  return (
    <div>
      <StyledSocials>
        {socials.map((social: SocialType) => (
          <Social icon={social.icon} link={social.link} />
        ))}
        {index}
      </StyledSocials>
    </div>
  );
};

export default Socials;
