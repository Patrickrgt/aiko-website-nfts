import styled from "styled-components";
import Section from "../../components/Section";
import Header from "../../components/Header";
import storyDecal from "../../assets/svgs/story-decal.svg";
import Socials from "../../components/Socials";
import girlFace from "../../assets/illustrations/girl-face.png";
import AikoFade from "../../components/AikoFade";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 10rem);
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e8f2fe, #b9cfea);

  margin-left: 7rem;
  @media only screen and (max-width: 1400px) {
    margin-left: 3rem;
  }
`;

const Decal = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
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
`;

const SocialsContainer = styled.div`
  position: absolute;
  top: 1rem;

  left: 8rem;
  @media only screen and (max-width: 1400px) {
    left: 4rem;
  }
`;

const Body = styled.p`
  width: 60%;
  opacity: 0.9;
  color: #4d6a8f;
  font-weight: 400;
  text-align: center;
  line-height: 1.3;
  margin: 0 auto;

  font-size: 2.6rem;
  @media only screen and (max-width: 1400px) {
    font-size: 2.2rem;
  }
`;

const GirlFace = styled.img`
  position: absolute;
  right: 0;
  bottom: 2px;
  height: 115%;
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
          <SocialsContainer>
            <Socials />
          </SocialsContainer>
          <Header>A:\Story</Header>
          <AikoFade>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Body>
          </AikoFade>
          <div />
          <GirlFace src={girlFace} alt="Girls face" />
        </Content>
      </Container>
    </Section>
  );
};

export default StorySection;
