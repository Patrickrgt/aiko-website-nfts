import styled from "styled-components";
import StampCollection from "../../components/userpanel/StampCollection";
import StampRewards from "../../components/userpanel/StampRewards";
import StampWarning from "../../components/userpanel/StampWarning";

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
      <StampCollection />
      <StampRewards />
      {/* <StampWarning></StampWarning> */}
    </StyledHomePage>
  );
};

export default UserLanding;
