import { useDispatch, useSelector } from "react-redux";
import { selectShowingArchives, setShowingArchives } from "../state/uiSlice";
import Popup from "./Popup";
import roninImage from "../assets/illustrations/ronin.png";
import roninImageColor from "../assets/illustrations/ronin-color.png";
import droidImage from "../assets/illustrations/droid.png";
import humanImage from "../assets/illustrations/human.png";
import humanImageColor from "../assets/illustrations/human-color.png";
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
          label: "Human",
          image: humanImage,
          coloredImage: humanImageColor,
          icon: humanIcon,
        },
        {
          label: "Droid",
          image: droidImage,
          coloredImage: droidImage,
          icon: droidIcon,
        },
        {
          label: "Ronin",
          image: roninImage,
          coloredImage: roninImageColor,
          icon: roninIcon,
        },
      ]}
    />
  );
};

export default ArchivesPopup;
