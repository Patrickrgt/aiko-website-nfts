import styled from "styled-components";
import UserNav from "../../components/userpanel/UserNav";
import StampRewards from "../../components/userpanel/StampRewards";
import JumboStampSystem from "../../components/userpanel/JumboStampSystem";

const StyledHomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: hidden;
`;

const UserLanding = () => {
  return (
    <StyledHomePage>
      <UserNav />
      {/* <JumboStampSystem /> */}
      <StampRewards />
    </StyledHomePage>
  );
};

export default UserLanding;
