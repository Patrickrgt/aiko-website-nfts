import styled from "styled-components";
import Section from "../../components/Section";
import Header from "../../components/Header";
import storyDecal from "../../assets/svgs/story-decal.svg";
import girlFace from "../../assets/illustrations/girl-face.png";
import AikoFade from "../../components/AikoFade";

const Container = styled.div`
  position: relative;
  width: 100%;

  height: calc(100vh - 10rem);
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e8f2fe, #b9cfea);

  margin-left: 7rem;
  @media only screen and (max-width: 1400px) {
    margin-left: 3rem;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 1.5rem;
  }
`;

const Decal = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  height: 60%;
  @media only screen and (max-width: 600px) {
    height: 30%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 600px) {
    position: relative;
    padding-top: 7rem;
    padding-bottom: 6rem;
  }
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.p`
  position: relative;
  opacity: 0.9;
  color: #4d6a8f;
  font-weight: 400;
  text-align: center;
  line-height: 1.3;
  margin: 1.3rem auto;

  font-size: 2.6rem;
  width: 60%;
  @media only screen and (max-width: 1400px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
    width: calc(100vw - 14rem);
    padding-top: 4.5rem;
  }
`;

const GirlFace = styled.img`
  position: absolute;
  right: 0;
  bottom: 2px;

  height: 115%;
  @media only screen and (max-width: 600px) {
    height: 100%;
    opacity: 0.6;
  }
`;

const StorySection = () => {
  return (
    <Section id="story-scroll">
      <Container>
        <BackgroundContainer>
          <Background />
          <Decal src={storyDecal} alt="Decorative asset" />
        </BackgroundContainer>
        <Content>
          <GirlFace src={girlFace} alt="Girls face" />
          <Header>A:\About us</Header>
          <AikoFade>
            <BodyContainer>
              <Body>
                Aiko Virtual is a collection of 8.888 NFTs that are all about
                "Cyber Cute", an aesthetic that blends future tech with anime
                vibes to create a unique look with broad appeal and an even
                broader vision. Vinne is the artistic mastermind behind our
                visual direction while Kyo is our resident fashion and design
                ronin.
              </Body>
              <Body>
                Our goal is simple: create a premium concept straddling the line
                between art and fashion , the digital and physical, and East and
                West. Aikos represents a never-before-seen concept rich in lore
                and personalization.
              </Body>
              <Body>
                Join us on our journey into the virtual unknown. Simply accept
                "A:\" and become virtual.
              </Body>
            </BodyContainer>
          </AikoFade>
          <div />
        </Content>
      </Container>
    </Section>
  );
};

export default StorySection;
