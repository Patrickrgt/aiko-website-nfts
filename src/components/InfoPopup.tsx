import { useDispatch, useSelector } from "react-redux";
import { selectShowingInfo, setShowingInfo } from "../state/uiSlice";
import Popup from "./Popup";
import roninImage from "../assets/illustrations/ronin.png";
import roninImageColor from "../assets/illustrations/ronin-color.png";
import droidImage from "../assets/illustrations/droid.png";
import droidImageColor from "../assets/illustrations/droid-color.png";
import humanImage from "../assets/illustrations/human.png";
import humanImageColor from "../assets/illustrations/human-color.png";

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
          label: "Info",
          copy: [
            "I was there. It was an autumn afternoon, it was cold but there were a lot of people around town. The brown of the leaves covered the whole ground and the clouds made the sky overcast, although it was a nice day, we were apprehensive, nervous, and afraid.",
            "What would my life be like? It was what was going through the minds of each one present, the distress they observed in the sky. Some were skeptical, others had already accepted its demise.",
            "A few hours later, it started. The clouds parted, the sky transmuted to fiery orange, and that's when we saw it. That gigantic rock covered the sun, chased away the clouds, and ignited in flames, screams filled my ears and tears ran down the faces of that crowd. Some knelt, overcome with despair or faith in a miracle.",
            "From a moment on, thousands, maybe millions of fragments began to disperse. That meteor had broken up, hitting every part of the planet, without exception. We had been warned about his fall, we knew there was no escape, but in fact, a miracle happened. Many died, it is true, but the world and much of humanity was alive. I thought it was my end, but actually, it was the beginning. Lithium was among us.",
          ],
        },
      ]}
    />
  );
};

export default InfoPopup;
