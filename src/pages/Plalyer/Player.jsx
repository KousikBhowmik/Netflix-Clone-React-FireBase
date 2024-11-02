import React, { useEffect, useState } from "react";
import "./Player.css";
import assets from "../../assets/assets.js";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} = useParams();

  const naviGate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const apiKey = import.meta.env.VITE_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        apiKey,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  },[])

  return (
    <div className="player">
      <img src={assets.back_arrow_icon} onClick={()=>{
        naviGate(-2)
      }}/>
      <iframe
        width={"90%"}
        height={"90%"}
        src={`https://youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder={"0"}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
