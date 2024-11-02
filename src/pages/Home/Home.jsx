import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import assets from "../../assets/assets.js";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={assets.hero_banner} className="banner-img" />
        <div className="hero-caption">
          <img src={assets.hero_title} className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order. a young man living
            in mordern Instanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={assets.play_icon} />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={assets.info_icon} />
              More info
            </button>
          </div>
          <TitleCards className="title-cards"/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} catagory={"top_rated"} />
        <TitleCards title={"Only on Netflix"} catagory={"popular"} />
        <TitleCards title={"Upcoming"} catagory={"upcoming"} />
        <TitleCards title={"Top Pics for You"} catagory={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
