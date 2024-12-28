import React from "react";
import { genres } from "../utils/constants";
const GenreButton = ({ genre_ids }) => {
  return (
    <div className="flex justify-center items-center w-auto mt-10">
      {genre_ids.map((genre) => (
        <button
          key={genre}
          className="border-[1px] border-cyan-400 text-white p-3 rounded-lg cursor-auto mx-2"
        >
          {genres[genre].genre}
        </button>
      ))}
    </div>
  );
};

export default GenreButton;
