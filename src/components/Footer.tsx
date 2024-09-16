import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowPosition from "../app/hooks/use-window-position";

import certified from "../assets/svgs/certified.svg";
// import etherscan from "../assets/svgs/etherscan.svg";
// import etherscanWhite from "../assets/svgs/etherscan-white.svg";
// import meepo from "../assets/svgs/meepo.svg";
// import meepoWhite from "../assets/svgs/meepo-white.svg";
// import lock from "../assets/svgs/lock.svg";
// import mirror from "../assets/svgs/mirror.svg";
// import mirrorWhite from "../assets/svgs/mirror-white.svg";
// import medium from "../assets/svgs/medium.svg";
// import mediumWhite from "../assets/svgs/medium-white.svg";
import Music from "./Music";

// interface LinkType {
//   icon: string;
//   whiteIcon: string;
//   url: string;
// }

// const links: LinkType[] = [
//   {
//     icon: mirror,
//     whiteIcon: mirrorWhite,
//     url: "",
//   },
//   {
//     icon: etherscan,
//     whiteIcon: etherscanWhite,
//     url: "",
//   },
//   {
//     icon: medium,
//     whiteIcon: mediumWhite,
//     url: "https://medium.com/@aikovirtual",
//   },
// ];

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

const DecalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  overflow: hidden;
  width: 20rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DecalOuter = styled.div`
  transform: translate(0, -50%) rotate(45deg);
  aspect-ratio: 1;
  background: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

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

const Certified = styled.img`
  height: 100%;
`;

// const Links = styled.div`
//   display: flex;
//   height: 100%;
//   padding: 0.2rem 0;
//   align-items: center;
//   justify-content: center;
// `;

// const Link = styled.a`
//   position: relative;
//   height: 65%;

//   margin-left: 2.3rem;
//   @media only screen and (max-width: 600px) {
//     margin-left: 1rem;
//   }

//   :hover {
//     img:nth-child(2) {
//       opacity: 0;
//     }
//   }
// `;

// const Icon = styled.img`
//   position: relative;
//   transform: translate(0, 0);
//   height: 100%;
//   z-index: 2;
// `;

// const IconOverlay = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   opacity: 1;
//   transition: 0.3s opacity;
//   z-index: 2;
// `;

// const MeepoContainer = styled.div`
//   height: 100%;
//   position: relative;
//   cursor: not-allowed;

//   :hover {
//     img:first-child {
//       transform: translate(-50%, -40%);
//     }
//     img:nth-child(3) {
//       opacity: 0;
//     }
//   }

//   margin-left: 2.3rem;
//   @media only screen and (max-width: 600px) {
//     margin-left: 1rem;
//   }
// `;

// const Lock = styled.img`
//   height: 60%;
//   position: absolute;
//   bottom: 95%;
//   left: 50%;
//   z-index: 1;

//   transition: 0.3s all;
//   transform: translate(-50%, 100%);
// `;

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
        {/* <Links>
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
                <IconOverlay src={link.whiteIcon} alt="Link" />
              </Link>
            ))}
          <MeepoContainer>
            <Lock src={lock} alt="Lock" />
            <Icon src={meepo} alt="Meepo" />
            <IconOverlay src={meepoWhite} alt="Meepo" />
          </MeepoContainer>
        </Links> */}
        <DecalContainer>
          <DecalOuter>
            <DecalMiddle>
              <DecalInner />
            </DecalMiddle>
          </DecalOuter>
        </DecalContainer>
      </StyledFooter>
      <Music atBottom={atBottom} />
    </>
  );
};

export default Footer;
