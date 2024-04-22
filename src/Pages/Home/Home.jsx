import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
// import Header from "../header/Header";
// import HeaderBottom from "../header/HeaderBottom";
import Hero from "../../Components/hero/Hero";
import Frames from "../../Components/Frame/Frames";
import Search from "../../Components/Search/Search";
import Browse from "../../Components/Browse/Browse";
import CardsDetails from "../../Components/Cards/CardsDetails";
import cardsHomeData from "../../data/CardData";
const Home = () => {
  return (
    <Helmet title={"Home"}>
      <div className="container overflow-hidden">
        <Hero />
        <Search />
        <Browse />
        <CardsDetails cardsHomeData={cardsHomeData} />
        <Frames />
      </div>
    </Helmet>
  );
};

export default Home;
