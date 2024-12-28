const RenderStar = (ratingOutOf10) => {
  const rating = ratingOutOf10 / 2;
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i}>
        <i className="ri-star-fill"></i>
      </span>
    );
  }

  if (decimal >= 0.75) {
    stars.push(
      <span key="quarter">
        <i className="ri-star-fill"></i>
      </span>
    );
  } else if (decimal >= 0.5) {
    stars.push(
      <span key="half">
        <i className="ri-star-half-fill"></i>
      </span>
    );
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <span key={`empty-${i}`}>
        <i className="ri-star-line"></i>
      </span>
    );
  }

  return stars;
};

export default RenderStar;
