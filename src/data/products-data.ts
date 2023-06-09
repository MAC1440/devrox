import roblastMain from "../assets/products/roblast_main.png";
import roblast1 from "../assets/products/roblast_1.png";
import roblast2 from "../assets/products/roblast_2.png";
//aero car stunt
import stuntMain from "../assets/products/stunt_main.png";
import stunt1 from "../assets/products/stunt_1.png";
import stunt2 from "../assets/products/stunt_2.png";
import stunt3 from "../assets/products/stunt_3.png";
import soon from "../assets/products/soon.jpg";

export const productsData = [
  {
    id: 1,
    name: "Roblast",
    path: "roblast",
    appStoreLink: "",
    images: [roblastMain, roblast1, roblast2],
    description:
      "ROBLAST is a thrilling puzzle game where players must navigate through a platform, carefully avoiding bombs scattered throughout. Armed with quick reflexes and a sharp mind, players must destroy all the bombs before they explode and inflict damage. As the game progresses, the challenges become increasingly difficult, requiring players to think strategically and use all their skills to succeed. With engaging game play, stunning graphics, and exciting challenges, ROBLAST is a must-play for puzzle game enthusiasts.",
  },
  {
    id: 2,
    name: "Aero Car Stunt",
    path: "car-stunt",
    appStoreLink:
      "https://play.google.com/store/apps/details?id=com.syndicategamestudio.aerocarstunt",
    images: [stuntMain, stunt1, stunt2, stunt3],
    description:
      "Aero Car Stunt is an adrenaline-pumping racing game where players take on the role of a skilled stunt driver. With a variety of challenging tracks to choose from, players must navigate their car through intricate obstacles and perform jaw-dropping stunts to score points and reach the finish line. The game features stunning graphics and realistic physics, making it feel like players are really behind the wheel of a high-performance car. With intuitive controls and exciting game play, Aero Car Stunt is the perfect game for anyone looking for a thrilling racing experience.",
  },
  {
    id: 3,
    name: "Cooking Simulator",
    path: "/",
    appStoreLink: "",
    images: [soon, soon],
    description:
      " Welcome to Culinary Delights: Master Chef Edition! Serve delicious dishes to customers, but be quick and accurate. Earn tips for fast and correct orders, but beware of mistakes and delays. Build a successful restaurant empire in this culinary adventure. Stay Tuned cuz its coming soon!",
  },
  {
    id: 4,
    name: "Rampaging Roar",
    path: "/",
    appStoreLink: "",
    images: [soon, soon],
    description: "Coming Soon. Stay Tuned for Monster Truck Mania",
  },
  {
    id: 5,
    name: "Coming Soon",
    path: "",
    appStoreLink: "",
    images: [soon, soon],
    description: "Coming Soon. Stay Tuned for more updates",
  },
];
export const images = [
  {
    label: "Aero Car Stunt",
    path: "car-stunt",
    imgPath: stuntMain.src,
    images: [stuntMain, stunt1, stunt2, stunt3],
    appStoreLink:
      "https://play.google.com/store/apps/details?id=com.syndicategamestudio.aerocarstunt",
    description:
      "Aero Car Stunt is an adrenaline-pumping racing game where players take on the role of a skilled stunt driver. With a variety of challenging tracks to choose from, players must navigate their car through intricate obstacles and perform jaw-dropping stunts to score points and reach the finish line. The game features stunning graphics and realistic physics, making it feel like players are really behind the wheel of a high-performance car. With intuitive controls and exciting game play, Aero Car Stunt is the perfect game for anyone looking for a thrilling racing experience.",
  },
  {
    label: "Roblast",
    path: "roblast",
    imgPath: roblastMain.src,
    images: [roblastMain, roblast1, roblast2],
    appStoreLink: "",
    description:
      "ROBLAST is a thrilling puzzle game where players must navigate through a platform, carefully avoiding bombs scattered throughout. Armed with quick reflexes and a sharp mind, players must destroy all the bombs before they explode and inflict damage. As the game progresses, the challenges become increasingly difficult, requiring players to think strategically and use all their skills to succeed. With engaging game play, stunning graphics, and exciting challenges, ROBLAST is a must-play for puzzle game enthusiasts.",
  },
];
