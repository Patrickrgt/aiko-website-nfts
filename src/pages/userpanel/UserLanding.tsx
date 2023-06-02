import styled from "styled-components";
import UserNav from "../../components/userpanel/UserNav";
import StampRewards from "../../components/userpanel/StampRewards";
import NftPanel from "../../components/userpanel/NftPanel";
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
