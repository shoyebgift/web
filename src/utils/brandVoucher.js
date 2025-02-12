import amazon from "../assets/temp/cat/amazon.png";
import bewakoof from "../assets/temp/cat/bewak.png";
import handm from "../assets/temp/cat/h&m.png";
import makemytrip from "../assets/temp/cat/mmt.png";
import myglamm from "../assets/temp/cat/myglamm.png";
import parkAvenue from "../assets/temp/cat/park.png";

export const brandVoucher = {
  electronics: [
    {
      name: "Amazon",
      image: amazon,
      discount: 7,
    },
    {
      name: "H&M",
      image: handm,
      discount: 5,
    },
  ],
  lifestyle: [
    {
      name: "Myglamm",
      image: myglamm,
      discount: 20,
    },
    {
      name: "Park Avenue",
      image: parkAvenue,
      discount: 40,
    },
  ],
  "food & beverages": [],
  ecommerce: [],

  travel: [
    {
      name: "MakeMyTrip",
      image: makemytrip,
      discount: 10,
    },
  ],
  cloths: [
    {
      name: "Bewakoof",
      image: bewakoof,
      discount: 2,
    },
  ],
};
