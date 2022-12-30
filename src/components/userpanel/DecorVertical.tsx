import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const DecorationSpan = styled.span`
  background: #e39858;
  padding: 20px calc(${(props: Props) => props.width}px * 2) 15px 2px;
  position: relative;
  margin-left: 0.25rem;
`;

const DecorationSpan2 = styled.span`
  background: #e39858;
  padding: 20px calc(${(props: Props) => props.width}px * 2) 15px 2px;
  position: relative;
  margin-left: 0.25rem;
`;

const DecorationSpan3 = styled.span`
  background: #e39858;
  padding: 20px calc(${(props: Props) => props.width}px * 2) 15px 2px;
  position: relative;
  margin-left: 0.25rem;
`;

interface Props {
  width: number;
}

const DecorHorizontal = ({ width }: Props) => {
  return (
    <Container>
      <DecorationSpan width={width + 2} />
      <DecorationSpan2 width={width} />
      <DecorationSpan3 width={width - 2} />
    </Container>
  );
};

export default DecorHorizontal;
