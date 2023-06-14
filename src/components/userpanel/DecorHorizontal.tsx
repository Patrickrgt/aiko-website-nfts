import styled from "styled-components";

const DecorationDiv = styled.div`
  width: 100%;
  height: calc(${(props: Props) => props.height}px * 5);
  background: #8e8f9c;
  margin-top: 1.15vh;
`;

const DecorationDiv2 = styled.div`
  width: 100%;
  height: calc(${(props: Props) => props.height}px * 5);
  background: #8e8f9c;
  margin-top: 0.5vh;
`;

const DecorationDiv3 = styled.div`
  width: 100%;
  height: calc(${(props: Props) => props.height}px * 5);
  background: #8e8f9c;
  margin-top: 0.6vh;
  margin-bottom: 0.8vh;
`;

interface Props {
  height: number;
}

const DecorHorizontal = ({ height }: Props) => {
  return (
    <div>
      <DecorationDiv height={height - 2} />
      <DecorationDiv2 height={height - 1} />
      <DecorationDiv3 height={height} />
    </div>
  );
};

export default DecorHorizontal;
