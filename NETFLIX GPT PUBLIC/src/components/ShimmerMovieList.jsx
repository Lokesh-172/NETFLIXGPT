import React from "react";
import ShimmerMovieCard from "./ShimmerMovieCard";

const ShimmerMovieList = ({ title }) => {
  return (
    <div className="px-20 w-full overflow-hidden">
      <div className="">
        <h1 className="text-3xl font-bold text-white my-4 select-none">
          {title}
        </h1>
        <div className="flex overflow-x-scroll gap-4 pb-4 w-full mb-4 no-scrollbar">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <ShimmerMovieCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerMovieList;
