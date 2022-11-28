import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

const DecorationDiv = styled.div`
  width: 100%;
  height: calc(${(props: Props) => props.height}px * 5);
  background: #8e8f9c;
  margin-top: 10px;
`;

const DecorationDiv2 = styled.div`
  width: 100%;
  height: calc(${(props: Props) => props.height}px * 5);
  background: #8e8f9c;
  margin-top: 6px;
`;

const DecorationDiv3 = styled.div`
  width: 100%;
  height: calc(${(props: Props) => props.height}px * 5);
  background: #8e8f9c;
  margin-top: 6px;
  margin-bottom: 8px;
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
