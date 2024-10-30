import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";
import cards_data from "../../assets/cards/Cards_data.js";

const TitleCards = ({ title, catagory }) => {
  const [apiData, setApiData] = useState([]);
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGQ3OGIyNDU4MWU3ZTk0OTE2YmViMTIxMGI3MDMxNiIsIm5iZiI6MTczMDIyMDU2OS43NzIyMTUsInN1YiI6IjY3MTkyMWI1NzY5MTA3ZDc3YjQ3NjMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PfHa1CjM9R0J6DeFSiSW9gtp6KBV7slnn81btuo6MZ4",
    },
  };

  const cardsRef = useRef();
  

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${catagory?catagory: "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
