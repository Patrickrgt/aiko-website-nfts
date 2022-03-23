import styled from "styled-components";

import certified from "../assets/svgs/certified.svg";
import etherscan from "../assets/svgs/etherscan.svg";
import meepo from "../assets/svgs/meepo.svg";
import mirror from "../assets/svgs/mirror.svg";

interface LinkType {
  icon: string;
  url: string;
}

const links: LinkType[] = [
  {
    icon: mirror,
    url: "",
  },
  {
    icon: etherscan,
    url: "",
  },
  {
    icon: meepo,
    url: "",
  },
];

const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background: linear-gradient(to right, #43679b, #43679b);

  height: 10rem;
  @media only screen and (max-width: 1400px) {
    height: 8rem;
  }
  @media only screen and (max-width: 1400px) {
    height: 6rem;
  }
`;

const DecalOuter = styled.div`
  width: 9rem;
  aspect-ratio: 1;
  background: var(--secondary);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%) rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecalMiddle = styled.div`
  width: 45%;
  aspect-ratio: 1;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecalInner = styled.div`
  width: 68%;
  aspect-ratio: 1;
  background: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteOverlay = styled.div`
  width: 100%;
  height: 8rem;
  background: white;
  position: absolute;
  bottom: 100%;
  left: 0;
`;

const Certified = styled.img`
  height: 100%;
`;

const Links = styled.div`
  display: flex;
  height: 100%;
`;

const Link = styled.a`
  height: 100%;
`;

const Icon = styled.img`
  height: 100%;
  margin-left: 2.3rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Certified src={certified} alt="Aiko Certified" />
      <Links>
        {links.map((link: LinkType) => (
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            <Icon src={link.icon} alt="Aiko Certified" />
          </Link>
        ))}
      </Links>
      <DecalOuter>
        <DecalMiddle>
          <DecalInner />
        </DecalMiddle>
      </DecalOuter>
      <WhiteOverlay />
    </StyledFooter>
  );
};

export default Footer;
