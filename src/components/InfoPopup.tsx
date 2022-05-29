import { useDispatch, useSelector } from "react-redux";
import { selectShowingInfo, setShowingInfo } from "../state/uiSlice";
import Popup from "./Popup";
import corner from "../assets/tabs/info-corner.svg";

const InfoPopup = () => {
  const dispatch = useDispatch();
  const showing = useSelector(selectShowingInfo);

  return (
    <Popup
      small
      show={showing}
      close={() => dispatch(setShowingInfo(false))}
      tabs={[
        {
          corner,
          label: "Info",
          info: [
            {
              bold: "A\\:Token >",
              normal: "ERC721-A",
            },
            {
              bold: "A:\\Total Supply >",
              normal: "8,888 AIKOs",
            },
            {
              bold: "A:\\Blockchain >",
              normal: "Ethereum",
            },
            {
              bold: "A:\\Traits >",
              normal: "XXX",
            },
            {
              bold: "A:\\Mint Date >",
              normal: "TBA",
            },
            {
              bold: "A:\\Mint Price >",
              normal: "TBA",
            },
          ],
        },
      ]}
    />
  );
};

export default InfoPopup;
