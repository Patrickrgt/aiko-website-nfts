import styled from "styled-components";

import aiko from "../../assets/userpanel/aiko-small.png";

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  display: flex;
  border-right: 1vh solid #828891;
  padding-right: 0.5vh;
  padding-top: 1.35vh;
  padding-bottom: 1.35vh;
`;

const FooterText = styled.h1`
  @media only screen and (min-width: 1324px) {
    font-size: 1.5vh;
  }
  color: #828891;
  font-size: 1vh;
  text-align: right;
  padding-right: 1vh;
  margin: auto;
`;

const FooterImg = styled.img`
  height: 3.5vh;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterText>
        User_panel Alpha Version
        <br />
        Powered by Aiko Virtual
      </FooterText>
      <FooterImg src={aiko} alt="Aiko logo" />
    </FooterDiv>
  );
};

export default Footer;
