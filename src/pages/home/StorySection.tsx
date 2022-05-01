import styled from "styled-components";
import Section from "../../components/Section";
import storyDecal from "../../assets/svgs/about.svg";
import AikoFade from "../../components/AikoFade";
import aboutAsset from "../../assets/illustrations/about.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 65%;
  @media only screen and (max-width: 1400px) {
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
    width: 60%;
    margin-bottom: 3rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  background: white;

  width: 55%;
  @media only screen and (max-width: 600px) {
    width: calc(100% - 4rem);
  }
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7rem;
  border-left: solid 9rem #fed476;
  @media only screen and (max-width: 1400px) {
    padding: 5rem;
    border-left: solid 7rem #fed476;
  }
  @media only screen and (max-width: 600px) {
    padding: 3rem;
    border-left: solid 4rem #fed476;
  }
`;

const TextContent = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderIcon = styled.img`
  margin-right: 1rem;

  height: 3.4rem;
  @media only screen and (max-width: 1400px) {
    height: 3.2rem;
  }
  @media only screen and (max-width: 600px) {
    height: 2.5rem;
  }
`;

const Header = styled.h2`
  color: #ffd577;
  line-height: 1;
  font-weight: 700;

  font-size: 4rem;
  @media only screen and (max-width: 1400px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.8rem;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  color: #4c71a1;
  font-weight: 400;

  font-size: 2.2rem;
  margin-top: 2rem;
  line-height: 1.4;
  @media only screen and (max-width: 1400px) {
    font-size: 2rem;
    margin-top: 1.5rem;
    line-height: 1.3;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    line-height: 1.2;
  }
`;

const StorySection = () => {
  return (
    <Section id="story-scroll">
      <AikoFade>
        <Container>
          <ImageContainer>
            <Image src={aboutAsset} alt="About aiko image" />
          </ImageContainer>
          <ContentContainer>
            <TextSection>
              <TextContent>
                <HeaderContainer>
                  <HeaderIcon src={storyDecal} alt="Story decal" />
                  <Header>{`A:\\About Us`}</Header>
                </HeaderContainer>
                <Paragraph>
                  Aiko Virtual is a collection of 8.888 NFTs that are all about
                  "Cyber Cute", an aesthetic that blends future tech with anime
                  vibes to create a unique look with broad appeal and an even
                  broader vision. Vinne is the artistic mastermind behind our
                  visual direction while Kyo is our resident fashion and design
                  ronin.
                </Paragraph>
                <Paragraph>
                  Our goal is simple: create a premium concept straddling the
                  line between art and fashion, the digital and physical, and
                  East and West. Aikos represents a never-before-seen concept
                  rich in lore and personalization.
                </Paragraph>
                <Paragraph>
                  Join us on our journey into the virtual unknown. Simply accept
                  "A:\"and become virtual.
                </Paragraph>
              </TextContent>
            </TextSection>
          </ContentContainer>
        </Container>
      </AikoFade>
    </Section>
  );
};

export default StorySection;
