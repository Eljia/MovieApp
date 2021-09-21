import React from "react";

const Discription = ({ movie, match }) => {
  const film = movie.find((el) => Number(el.id) === Number(match.params.id));
  return (
    <div>
      <img src={film.Poster} alt="" />
      <h1>heellooooo</h1>
    </div>
  );
};

export default Discription;
