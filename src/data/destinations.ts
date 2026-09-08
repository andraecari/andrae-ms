import type { Destination } from "../types/portfolio";

import torontoImage from "../assets/destinations/toronto.JPG";
import montrealImage from "../assets/destinations/montreal.png";
import calgaryImage from "../assets/destinations/banff.JPG";
import nycImage from "../assets/destinations/nyc.jpg";
import caboImage from "../assets/destinations/cabo.jpg";
import puntaCanaImage from "../assets/destinations/dr.jpg";
import boracayImage from "../assets/destinations/boracay.jpg";
import taipeiImage from "../assets/destinations/taiwan.jpg";
import japanImage from "../assets/destinations/japan.JPG";
import seoulImage from "../assets/destinations/korea.JPG";
import baliImage from "../assets/destinations/bali.jpg";
import sfImage from "../assets/destinations/sf.png";
import vegasImage from "../assets/destinations/vegas.png";

export const destinations: Destination[] = [
  {
    id: "toronto",
    name: "Toronto, Canada",
    country: "",
    x: 23.3,
    y: 40.5,
    image: torontoImage,
    description: "Home ❤️",
  },
  {
    id: "montreal",
    name: "Montreal, Canada",
    country: "",
    x: 25.5,
    y: 38.5,
    image: montrealImage,
    description: "ORANGE JULEP. We couldn't do the duo pose btw.",
  },
  {
    id: "calgary",
    name: "Calgary, Canada",
    country: "",
    x: 14.2,
    y: 34.5,
    image: calgaryImage,
    description: "Spontaneous trip outta nowhere.",
  },
  {
    id: "new-york-city",
    name: "New York City, USA",
    country: "",
    x: 25,
    y: 42.7,
    image: nycImage,
    description: "If me and my gang pull up...",
  },
  {
    id: "cabo-san-lucas",
    name: "Cabo San Lucas, Mexico",
    country: "",
    x: 13.7,
    y: 51.5,
    image: caboImage,
    description: "Trip made it out. Celebrated my birthday in September.",
  },
  {
    id: "punta-cana",
    name: "Punta Cana, Dominican Republic",
    country: "",
    x: 25.9,
    y: 55.2,
    image: puntaCanaImage,
    description: "Beyonce, I will never forget you.",
  },
  {
    id: "boracay",
    name: "Boracay, Philippines",
    country: "",
    x: 81.9,
    y: 59.6,
    image: boracayImage,
    description: "My brother got scammed here.",
  },
  {
    id: "taipei",
    name: "Taipei, Taiwan",
    country: "",
    x: 82.1,
    y: 53.1,
    image: taipeiImage,
    description: "AsianBoyRay is from here.",
  },
  {
    id: "japan",
    name: "Japan",
    country: "",
    x: 88,
    y: 46.2,
    image: japanImage,
    description: "Been here twice. Gotta go 3 more times.",
  },
  {
    id: "seoul",
    name: "Seoul, South Korea",
    country: "",
    x: 83.9,
    y: 46,
    image: seoulImage,
    description: "MY second home... SO MUCH SHOPPING!",
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    country: "",
    x: 79.7,
    y: 73.4,
    image: baliImage,
    description: "You can ONLY larp here (no larping, we were actualling living it)",
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
    description: "Coming back here with more money next time.",
  },
];