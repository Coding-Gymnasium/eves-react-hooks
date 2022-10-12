import { useState } from "react";
import { Star } from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((_n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        Rating: {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
