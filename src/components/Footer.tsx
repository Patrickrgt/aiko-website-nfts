import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowPosition from "../app/hooks/use-window-position";

import certified from "../assets/svgs/certified.svg";
import etherscan from "../assets/svgs/etherscan.svg";
import meepo from "../assets/svgs/meepo.svg";
import mirror from "../assets/svgs/mirror.svg";
import Music from "./Music";

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
];

const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #43679b, #43679b);

  height: 10rem;
  padding: 2rem 3rem;
  @media only screen and (max-width: 1400px) {
    height: 8rem;
    padding: 1.5rem 2.5rem;
  }
  @media only screen and (max-width: 600px) {
    height: 6rem;
    padding: 1.3rem;
  }
`;

const DecalOuter = styled.div`
  aspect-ratio: 1;
  background: var(--secondary);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%) rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9rem;
  @media only screen and (max-width: 1400px) {
    width: 8rem;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Certified = styled.img`
  height: 100%;
`;

const Links = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 600px) {
    padding: 0.2rem 0;
  }
`;

const Link = styled.a`
  height: 100%;
`;

const Icon = styled.img`
  height: 100%;

  margin-left: 2.3rem;
  @media only screen and (max-width: 600px) {
    margin-left: 1rem;
  }
`;

const Footer = () => {
  const windowPosition = useWindowPosition();
  const footerRef = useRef<HTMLDivElement>(null);

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    if (footerRef.current) {
      if (windowPosition + window.outerHeight >= footerRef.current.offsetTop) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    }
  }, [windowPosition]);

  return (
    <>
      <StyledFooter ref={footerRef}>
        <Certified src={certified} alt="Aiko Certified" />
        <Links>
          {links
            .filter((link: LinkType) => link.url)
            .map((link: LinkType, index: number) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src={link.icon} alt="Link" />
              </Link>
            ))}
          <Icon src={meepo} alt="Meepo" />
        </Links>
        <DecalOuter>
          <DecalMiddle>
            <DecalInner />
          </DecalMiddle>
        </DecalOuter>
        <WhiteOverlay />
      </StyledFooter>
      <Music atBottom={atBottom} />
    </>
  );
};

export default Footer;
