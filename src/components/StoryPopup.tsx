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
            "I was there on that fateful autumn afternoon. It was cold, but there were droves of people around town. The brown leaves matted the ground and the clouds gave the sky a subtle overcast tone. A nice day by all measures, yet we were all apprehensive, nervous, and most of all, afraid.",
            "“Is there an afterlife?” was our shared thought as each person observed the distress taking form in the sky. Some were still skeptical, while others had already accepted their dismal fate.",
            "It started a few minutes later. The clouds parted, the sky transmuted to a fiery orange cacophony, and that's when we saw it. A titanic rocky mass eclipsed the sun, vaporized the clouds, and ignited the stratosphere. Screams filled the air and a river of tears ran down the crowd’s face. Some knelt, either in despair or in hopes of a miracle.",
            "From that moment on, countless fragments began to disperse. The meteor had crumbled, mercilessly striking the planet over and over again. We had been warned about the fall and knew, were it to happen, that there would be no escape. Yet, when we opened our eyes, a miracle was at hand.",
            "Lithium was among us.",
          ],
        },
        {
          label: "Zenet",
          image: droidImage,
          coloredImage: droidImageColor,
          badge: droidBadge,
          copy: [
            "The world has changed with the advent of Lithium and with it, humanity. The substance had granted us extraordinary advances in technology, prevalent in everything from the faint blue glow of our biomecha to our superhuman strength and resilience.",
            "The production fields were meticulously monitored, the harvests perfectly sequenced, the soil, supercharged. Our star cities basked in their own blue splendor as agile vehicles zipped between ports and docks throughout its exterior.",
            "No longer can humanity call itself the sole purveyor of intelligence. Droids now walk among us in this brave new world. Efficient, intelligent, fast, and practical, they command aircraft, police the city, and even explore the dark celestial unknown.",
            "Where does the raw energy for all this come from? My dear friend, “In Lithium omnia responsa” - all answers lie in Lithium. Each joule of energy that powers each machine, droid, and city is sourced from Lithium stars. A true technological miracle.",
          ],
        },
        {
          label: "Benkei",
          image: roninImage,
          coloredImage: roninImageColor,
          badge: roninBadge,
          largerBadge: true,
          copy: [
            "Leaves flutter in zen spirals over the great temples of Benkei. There walk sages and men who yearn for the wisdom of ancients. But there are also those who, whether hidden in plain sight or by deep shadows of the night, carefully keep watch.",
            "In this beautiful world lie architectural wonders, spectacular landscapes, and humble souls. Peace is enjoyed, art cultivated, and happiness found even as larger forces clash, rival temples battle, and ancient bloodlines guard their secrets.",
            "Ronin, masters in the art of war, are warriors that specialize in infiltration, guarding, and monitoring the lords of these lands. They are experts in disguise and discretion, using every means at their disposal to achieve their purpose. Even at the cost of their honorable lives.",
            "More sacred than any temple, Benkei would be nothing without Inochi no ki, the great tree that spreads its roots and canopy as far as the eye can see, bringing balance to the unsettled and peace to the desperate. But what would happen if her branches were to wilt, if her roots no longer supported her? What would happen to Benkei and its concept of life?",
            "That great sacred tree, which once symbolized balance, which once brought peace, which once brought hope in its generous harvests, is now dry and twisted. Nothing more than a mere shadow of its former self. The end is nigh.",
          ],
        },
      ]}
    />
  );
};

export default StoryPopup;
