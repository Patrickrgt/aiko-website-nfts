import styled from "styled-components";

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Decal = styled.div`
  width: 55rem;
  height: 3rem;
  background: pink;
`;

const Header = styled.div`
  color: #f8d173;
  font-size: 6rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
`;

const SubHeader = styled.div`
  color: #4d6694;
  font-size: 4.2rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
`;

const Image = styled.div`
  width: 38rem;
  aspect-ratio: 1;
  background: pink;
`;

const ButtonContainer = styled.button`
  display: flex;
  cursor: pointer;
  background: #f7d173;
  width: 35.5rem;
  padding: 5px;
  clip-path: polygon(
    4.55% 0%,
    95.45% 0%,
    100% 25%,
    100% 75%,
    95.45% 100%,
    4.55% 100%,
    0% 75%,
    0% 25%
  );
`;

const OpenseaContainer = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  clip-path: var(--hex);
  background: white;
  margin-right: 5px;
`;

const ButtonLabel = styled.div`
  flex: 1;
  height: 100%;
  background: #56729e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.1rem;
  font-weight: 400;
  white-space: nowrap;
  clip-path: polygon(
    5% 0%,
    95% 0%,
    100% 25%,
    100% 75%,
    95% 100%,
    5% 100%,
    0% 75%,
    0% 25%
  );
`;

const MintConfirmation = () => {
  return (
    <>
      <div />
      <TopContent>
        <Decal />
        <Header>congratulations!</Header>
        <SubHeader>welcome to aiko virtual</SubHeader>
      </TopContent>
      <Image />
      <ButtonContainer>
        <OpenseaContainer>meow</OpenseaContainer>
        <ButtonLabel>{"<View In Opensea.exe>"}</ButtonLabel>
      </ButtonContainer>
    </>
  );
};

export default MintConfirmation;
