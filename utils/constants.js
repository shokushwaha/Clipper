import { BsCode, BsEmojiSunglasses } from "react-icons/bs";
import { GiCakeSlice, GiGalaxy, GiLipstick } from "react-icons/gi";
import { FaPaw, FaMedal, FaGamepad } from "react-icons/fa";

import { Other } from "../components/icon/Other";

export const topics = [
    {
        name: "development",
        icon: <BsCode />,
    },
    {
        name: "comedy",
        icon: <BsEmojiSunglasses />,
    },
    {
        name: "gaming",
        icon: <FaGamepad />,
    },
    {
        name: "food",
        icon: <GiCakeSlice />,
    },
    {
        name: "dance",
        icon: <GiGalaxy />,
    },
    {
        name: "beauty",
        icon: <GiLipstick />,
    },
    {
        name: "animals",
        icon: <FaPaw />,
    },
    {
        name: "sports",
        icon: <FaMedal />,
    },
    {
        name: "Other",
        icon: <Other />,
    },
];

export const footerList1 = [
    "About",
    "Newsroom",
    "Store",
    "Contact",
    "Carrers",
    "ByteDance",
    "Creator Directory",
];
export const footerList2 = [
    "Clipper for Good",
    "Advertise",
    "Developers",
    "Transparency",
    "Clipper Rewards",
];
export const footerList3 = [
    "Help",
    "Safety",
    "Terms",
    "Privacy",
    "Creator Portal",
    "Community Guidelines",
];
