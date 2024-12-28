import React, { useState } from "react";
import { poster_cdn } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ poster_path, id, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!poster_path) return null;

  return (
    <div 
      className="flex-shrink-0 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/browse/${title}/${id}`}>
        <div className="relative w-48 overflow-hidden rounded-md">
          <img 
            src={poster_cdn + poster_path} 
            alt="Movie Poster"
            className="w-full select-none rounded-md"
            draggable="false"
          />
          <div 
            className={`absolute inset-0 bg-black/60 transition-transform duration-300 ease-in-out flex items-end ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="p-4 text-white w-full">
              <h2 className="font-bold text-lg">{title}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;