import {
  faCartPlus,
  // faTag,
  faCarrot,
  faStethoscope,
  faPills,
  faHeart,
  faHouse,
  faAddressBook,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export const nav__link = [
  {
    path: "home",
    display: "Home",
    imgNav: faHouse,
  },
  {
    path: "carts",
    display: "Cart",
    imgNav: faCartPlus,
    badge: 0,
  },
  {
    path: "about",
    display: "About",
    imgNav: faAddressCard,
  },
  {
    path: "contact",
    display: "Contact",
    imgNav: faAddressBook,
  },
];

export const nav__mobile__link = [
  {
    paths: "cares",
    displayText: "Cares",
    iconImg: faHeart,
  },
  {
    paths: "medicine",
    displayText: "Medicine",
    iconImg: faPills,
  },
  {
    paths: "vitamins",
    displayText: "Vitamins",
    iconImg: faCarrot,
  },
  {
    paths: "equipment",
    displayText: "Equipment",
    iconImg: faStethoscope,
  },
];
