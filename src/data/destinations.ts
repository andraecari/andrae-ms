import type { Destination } from "../types/portfolio";

import torontoImage from "../assets/destinations/toronto.jpg";
import montrealImage from "../assets/destinations/montreal.gif";
import calgaryImage from "../assets/destinations/banff.jpg";
import nycImage from "../assets/destinations/nyc.jpg";
import caboImage from "../assets/destinations/cabo.jpg";
import puntaCanaImage from "../assets/destinations/dr.jpg";
import boracayImage from "../assets/destinations/boracay.gif";
import taipeiImage from "../assets/destinations/taiwan.gif";
import japanImage from "../assets/destinations/japan.jpg";
import seoulImage from "../assets/destinations/korea.jpg";
import baliImage from "../assets/destinations/bali.jpg";
import sfImage from "../assets/destinations/sf.gif";
import vegasImage from "../assets/destinations/vegas.png";

export const destinations: Destination[] = [
  {
    id: "toronto",
    name: "Toronto, Canada",
    country: "",
    x: 23.3,
    y: 40.5,
    image: torontoImage,
    description: "Home❤️",
  },
  {
    id: "montreal",
    name: "Montreal, Canada",
    country: "",
    x: 25.5,
    y: 38.5,
    image: montrealImage,
    description: "ORANGE JULEP. We couldn't do the duo pose.",
  },
  {
    id: "calgary",
    name: "Calgary, Canada",
    country: "",
    x: 14.2,
    y: 34.5,
    image: calgaryImage,
    description: "Never felt closer to nature than I did at Lake Louise.",
  },
  {
    id: "new-york-city",
    name: "New York City, USA",
    country: "",
    x: 25,
    y: 42.7,
    image: nycImage,
    description: "NYC + Richard Marquez (he's the one taking the photograph)",
  },
  {
    id: "cabo-san-lucas",
    name: "Cabo San Lucas, Mexico",
    country: "",
    x: 13.7,
    y: 51.5,
    image: caboImage,
    description: "First day of Third-Year (in Cabo)! Also, why did I get the small horse??",
  },
  {
    id: "punta-cana",
    name: "Punta Cana, Dominican Republic",
    country: "",
    x: 25.9,
    y: 55.2,
    image: puntaCanaImage,
    description: "Punta Cana was a movie. Beyonce, I will never forget you... (IYKYK)",
  },
  {
    id: "boracay",
    name: "Boracay, Philippines",
    country: "",
    x: 81.9,
    y: 59.6,
    image: boracayImage,
    description: "My brother got scammed here (IYKYK)",
  },
  {
    id: "taipei",
    name: "Taipei, Taiwan",
    country: "",
    x: 82.1,
    y: 53.1,
    image: taipeiImage,
    description: "ME PULLING MY TAIWANESE LEG... I was trying to be aesthetic!",
  },
  {
    id: "japan",
    name: "Japan",
    country: "",
    x: 88,
    y: 46.2,
    image: japanImage,
    description: "Visiting twice wasn't enough. See you again Japan! (Not now, sometime in the future)",
  },
  {
    id: "seoul",
    name: "Seoul, South Korea",
    country: "",
    x: 83.9,
    y: 46,
    image: seoulImage,
    description: "Just me and my Seoulmates... and my HANBOK! I will be back... and I will buy everything.",
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    country: "",
    x: 79.7,
    y: 73.4,
    image: baliImage,
    description: "BALI LARP MAX (except we weren't larping... we actually living it. this is my yacht)",
  },
  {
    id: "sf",
    name: "San Francisco, USA",
    country: "",
    x: 10.8,
    y: 43,
    image: sfImage,
    description: "Vivian and Norman's Ice Cream is here.",
  },
  {
    id: "vegas",
    name: "Las Vegas, USA",
    country: "",
    x: 12.6,
    y: 44,
    image: vegasImage,
    description: "Vegas was fun. Coming back with more money next time.",
  },
];