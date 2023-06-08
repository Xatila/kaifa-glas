import iphone7 from "../ProductsPics/7.jpg";
import iphone8 from "../ProductsPics/8.jpg";
import iphoneX from "../ProductsPics/X.jpg";
import iphoneXr from "../ProductsPics/Xr.jpg";
import iphoneXs from "../ProductsPics/Xs.jpg";
import iphoneXsMax from "../ProductsPics/XsMax.jpg";
import iphone11pic from "../ProductsPics/11pic.jpg";
import iphone11ProMax from "../ProductsPics/11ProMax.jpg";
import iphoneSE2020 from "../ProductsPics/SE2020.jpg";
import iphone12mini from "../ProductsPics/12Mini.jpg";
import iphone12 from "../ProductsPics/12.jpg";
import iphone12Pro from "../ProductsPics/12Pro.jpg";
import iphone12ProMax from "../ProductsPics/12ProMax.jpg";
import iphone13Mini from "../ProductsPics/13Mini.jpg";
import iphone13 from "../ProductsPics/13.jpg";
import iphone13Pro from "../ProductsPics/13Pro.jpg";
import iphone13ProMax from "../ProductsPics/13ProMax.jpg";
import iphoneSE2022 from "../ProductsPics/SE2022.jpg";
import iphone14 from "../ProductsPics/14.jpg";
const firstPart =
  "Този стъклен протектор има 9D-21D (в зависимост от модела) цялостно покритие, изработен от Gorilla Glass и осигурява защита на вашия iPhone ";
const secondPart =
  " от надрасквания и други повреди. Той разполага с висококачествено лепило, което помага да се запази протекторът на място и го прави лесен за поставяне. Протекторът е изработен от премиум материали, което го прави много издръжлив.";
let index = 0;
let currentId = 1;
const models = [
  "7",
  "8",
  "X",
  "XR",
  "XS",
  "XS Max",
  "11",
  "11 Pro",
  "11 Pro Max",
  "SE(2020)",
  "12 mini",
  "12",
  "12 Pro",
  "12 Pro Max",
  "13 mini",
  "13",
  "13 Pro",
  "13 Pro Max",
  "SE(2022)",
  "14",
  "14 Plus",
  "14 Pro",
  "14 Pro Max",
];
const Products = [
  {
    id: currentId,
    image: iphone7,
    title: "Iphone 7",
    description: firstPart + `${models[index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone8,
    title: "Iphone 8",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphoneX,
    title: "Iphone X",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphoneXr,
    title: "Iphone XR",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphoneXs,
    title: "Iphone XS",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphoneXsMax,
    title: "Iphone XS Max",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone11pic,
    title: "Iphone 11",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone11ProMax,
    title: "Iphone 11 Pro",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone11ProMax,
    title: "Iphone 11 Pro Max",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphoneSE2020,
    title: "Iphone SE(2020)",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone12mini,
    title: "Iphone 12 mini",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone12,
    title: "Iphone 12",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone12Pro,
    title: "Iphone 12 Pro",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone12ProMax,
    title: "Iphone 12 Pro Max",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone13Mini,
    title: "Iphone 13 mini",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone13,
    title: "Iphone 13",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone13Pro,
    title: "Iphone 13 Pro",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone13ProMax,
    title: "Iphone 13 Pro Max",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphoneSE2022,
    title: "Iphone SE(2022)",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone14,
    title: "Iphone 14",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone14,
    title: "Iphone 14 Plus",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone14,
    title: "Iphone 14 Pro",
    description: firstPart + `${models[++index]}` + secondPart,
  },
  {
    id: ++currentId,
    image: iphone14,
    title: "Iphone 14 Pro Max",
    description: firstPart + `${models[++index]}` + secondPart,
  },

  // Add more product objects as needed
];
export default Products;
