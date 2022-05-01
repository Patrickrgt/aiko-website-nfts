import { useDispatch, useSelector } from "react-redux";
import { selectShowingArchives, setShowingArchives } from "../state/uiSlice";
import Popup from "./Popup";
import roninImage from "../assets/illustrations/ronin.png";
import roninIcon from "../assets/illustrations/ronin-icon.svg";
import droidIcon from "../assets/illustrations/droid-icon.svg";
import humanIcon from "../assets/illustrations/human-icon.svg";

const ArchivesPopup = () => {
  const dispatch = useDispatch();
  const showingArchives = useSelector(selectShowingArchives);

  return (
    <Popup
      show={showingArchives}
      close={() => dispatch(setShowingArchives(false))}
      tabs={[
        {
          label: "Ronin",
          image: roninImage,
          icon: roninIcon,
        },
        {
          label: "Human",
          image: roninImage,
          icon: humanIcon,
        },
        {
          label: "Droid",
          image: roninImage,
          icon: droidIcon,
        },
      ]}
    />
  );
};

export default ArchivesPopup;
