import { useDispatch } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { setShowingRewards } from "../../state/uiSlice";

import ButtonBlue from "./ButtonBlue";

const StampCollection = () => {
  const dispatch = useDispatch();

  return (
    <ButtonBlue
      content="Rewards"
      close={() => dispatch(setShowingRewards(true))}
    />
  );
};

export default StampCollection;
