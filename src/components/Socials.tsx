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

const Index = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: var(--primary);
  font-weight: 500;
  padding: 0.5rem;
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
        <Index>{`(0${index})`}</Index>
      </StyledSocials>
    </div>
  );
};

export default Socials;
