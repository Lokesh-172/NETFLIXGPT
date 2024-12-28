import React, { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ShimmerMovieCard from "./ShimmerMovieCard";
const MovieList = ({ title, movies }) => {
  const [displayItems, setDisplayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setDisplayItems([...movies, ...movies, ...movies]);
      setIsLoading(true);
      setLoadedImages(new Set());
    }
  }, [movies]);

  useEffect(() => {
    if (displayItems.length > 0) {
      const loadImages = async () => {
        const imagePromises = displayItems.map((movie) => {
          if (!movie?.poster_path) return Promise.resolve();
          
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              setLoadedImages(prev => new Set([...prev, movie.id]));
              resolve();
            };
            img.onerror = resolve; // Still resolve on error to prevent hanging
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          });
        });

        await Promise.all(imagePromises);
        setIsLoading(false);
      };

      loadImages();
    }
  }, [displayItems]);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth;
    const currentScroll = container.scrollLeft;
    const targetScroll = currentScroll + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (direction === "right" && currentScroll >= container.scrollWidth - container.offsetWidth * 2) {
        container.scrollTo({ left: 0, behavior: "auto" });
      } else if (direction === "left" && currentScroll <= container.offsetWidth) {
        container.scrollTo({
          left: container.scrollWidth - container.offsetWidth * 2,
          behavior: "auto",
        });
      }
    }, 500);
  };

  // Show full shimmer while initializing
  if (!movies || movies.length === 0) {
    return (
      <div className="px-20 w-full">
        <h1 className="text-3xl font-bold text-white my-4 select-none">
          {title}
        </h1>
        <div className="flex gap-4 pb-4">
          {[...Array(6)].map((_, index) => (
            <ShimmerMovieCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pl-10 pr-1 sm:px-20 w-full relative group">
      <h1 className="text-3xl font-bold text-white my-4 select-none">
        {title}
      </h1>

      <div className="relative">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll gap-4 pb-4 no-scrollbar scroll-smooth"
        >
          {displayItems.map((movie, index) => (
            <div key={`${movie?.id}-${index}`} className="flex-shrink-0">
              {(!loadedImages.has(movie?.id)) ? (
                <ShimmerMovieCard />
              ) : (
                <MovieCard
                  poster_path={movie?.poster_path}
                  id={movie?.id}
                  title={movie?.title}
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;