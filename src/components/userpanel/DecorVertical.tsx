import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const DecorationSpan = styled.span`
  background: #e39858;
  padding: 20px calc(${(props: Props) => props.width}px * 2) 15px 2px;
  position: absolute;
  top: 2rem;
  left: 4rem;
  margin: auto;
`;

const DecorationSpan2 = styled.span`
  background: #e39858;
  padding: 20px calc(${(props: Props) => props.width}px * 2) 15px 2px;
  position: absolute;
  top: 2rem;
  left: 3rem;

  margin: auto;
`;

const DecorationSpan3 = styled.span`
  background: #e39858;
  padding: 20px calc(${(props: Props) => props.width}px * 2) 15px 2px;
  position: absolute;
  top: 2rem;
  left: 1.75rem;
  margin: auto;
`;

interface Props {
  width: number;
}

const DecorHorizontal = ({ width }: Props) => {
  return (
    <div>
      <DecorationSpan width={width - 2} />
      <DecorationSpan2 width={width - 1} />
      <DecorationSpan3 width={width} />
    </div>
  );
};

export default DecorHorizontal;
