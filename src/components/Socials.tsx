import styled from "styled-components";
import Social from "./Social";
import twitter from "../assets/svgs/twitter.svg";
import discord from "../assets/svgs/discord.svg";
import opensea from "../assets/svgs/opensea.svg";
import AikoFade from "./AikoFade";

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
    link: "https://discord.gg/g6V5SxQFV8",
  },
  {
    icon: twitter,
    link: "https://twitter.com/aikovirtual",
  },
];

const StyledSocials = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const Socials = () => {
  return (
    <AikoFade>
      <div>
        <StyledSocials>
          {socials.map((social: SocialType) => (
            <Social icon={social.icon} link={social.link} />
          ))}
        </StyledSocials>
      </div>
    </AikoFade>
  );
};

export default Socials;
