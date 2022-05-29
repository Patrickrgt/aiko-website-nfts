import { useDispatch, useSelector } from "react-redux";
import { selectShowingStory, setShowingStory } from "../state/uiSlice";
import Popup from "./Popup";
import roninImage from "../assets/illustrations/ronin.png";
import roninImageColor from "../assets/illustrations/ronin-color.png";
import droidImage from "../assets/illustrations/droid.png";
import droidImageColor from "../assets/illustrations/droid-color.png";
import humanImage from "../assets/illustrations/human.png";
import humanImageColor from "../assets/illustrations/human-color.png";
import humanBadge from "../assets/tabs/human-badge.svg";
import droidBadge from "../assets/tabs/droid-badge.svg";
import roninBadge from "../assets/tabs/ronin-badge.svg";

const StoryPopup = () => {
  const dispatch = useDispatch();
  const showing = useSelector(selectShowingStory);

  return (
    <Popup
      show={showing}
      close={() => dispatch(setShowingStory(false))}
      tabs={[
        {
          label: "Lixia",
          image: humanImage,
          coloredImage: humanImageColor,
          badge: humanBadge,
          copy: [
            "I was there. It was an autumn afternoon, it was cold but there were a lot of people around town. The brown of the leaves covered the whole ground and the clouds made the sky overcast, although it was a nice day, we were apprehensive, nervous, and afraid.",
            "What would my life be like? It was what was going through the minds of each one present, the distress they observed in the sky. Some were skeptical, others had already accepted its demise.",
            "A few hours later, it started. The clouds parted, the sky transmuted to fiery orange, and that's when we saw it. That gigantic rock covered the sun, chased away the clouds, and ignited in flames, screams filled my ears and tears ran down the faces of that crowd. Some knelt, overcome with despair or faith in a miracle.",
            "From a moment on, thousands, maybe millions of fragments began to disperse. That meteor had broken up, hitting every part of the planet, without exception. We had been warned about his fall, we knew there was no escape, but in fact, a miracle happened. Many died, it is true, but the world and much of humanity was alive. I thought it was my end, but actually, it was the beginning. Lithium was among us.",
          ],
        },
        {
          label: "Zenet",
          image: droidImage,
          coloredImage: droidImageColor,
          badge: droidBadge,
          copy: [
            "The world has changed and with it humanity. Lithium has given us extraordinary advances, from the blue glow that surrounds our technology to the most advanced techniques in biomechanics.",
            "The fields were millimetrically monitored; the harvests, perfectly sequenced; the soil, fertile as never seen. The star cities, extremely planned, are crossed by agile, ingenious vehicles, subtly illuminated by the blue light emitted from their interior.",
            "Humanity is no longer alone, droids designed and manufactured by it walk among us in this new world. Efficient, intelligent, fast, and practical, they command aircraft, lead patrols, assist civilians or explore space.",
            "All energy that powers each machine, each droid, each production process, and each city, is powered by a lithium star. This technological miracle is responsible for everything you see, eat and use.",
            "Illnesses? This world no longer knows this word. Medicine, like humanity, has reached its peak. No more pests, no more deficiencies, no more limits.",
          ],
        },
        {
          label: "Benkei",
          image: roninImage,
          coloredImage: roninImageColor,
          badge: roninBadge,
          largerBadge: true,
          copy: [
            "The leaves calmly fly over the great temples of Benkei. There walk sages, young people, women, and children who learn about the wisdom of the ancients, of mountains, waters, and forests. But there are those who, hidden in plain sight or hidden by the shadows of the night, observe the best time to act.",
            "In this beautiful world, we find architectural wonders, spectacular landscapes, and simple people. Peace can be enjoyed, art cultivated, and happiness found as forces secretly clash temples battle, and ancient bloodlines guard their secrets.",
            "Ronin, masters in the art of war, are the warriors specialized in infiltrating, guarding, and protecting the lords of these lands. They are experts in disguise, deterrence, and discretion, using every means at their disposal for their purpose, even at the cost of their honorable life.",
            "More sacred than any temple, Benkei could not stand without its Inochi no ki, the great tree that spreads its roots and fruits over long distances, bringing balance to the unbalanced and peace to the desperate. But what would happen if she was in her last fruits? If her roots no longer supported her? If its existence, which symbolizes life in Benkei, was ending?",
            "That great tree sacred to all, which once symbolized balance, which once brought peace, which once brought hope with its fruits and its roots, is now dry, twisted, withdrawing its roots and bearing its last fruits. Misfortune, torment, scarcity. The end is inevitable.",
          ],
        },
      ]}
    />
  );
};

export default StoryPopup;
