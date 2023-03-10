import styled from "styled-components";
import UserNav from "../../components/userpanel/UserNav";
import StampRewards from "../../components/userpanel/StampRewards";
import NftPanel from "../../components/userpanel/NftPanel";
import JumboStampSystem from "../../components/userpanel/JumboStampSystem";
import ErrorPopup from "../../components/userpanel/ErrorPopup";

import cursor from "../../assets/userpanel/cursor.png";

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;
  cursor: url(${cursor}), auto;
`;

const DesktopView = styled.div`
  display: flex;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const UserLanding = () => {
  return (
    <StyledHomePage>
      <ErrorPopup />
      <UserNav />
      <StampRewards />
      <NftPanel />
    </StyledHomePage>
  );
};

export default UserLanding;
