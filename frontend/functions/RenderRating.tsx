import StarIcon from "@/app/components/icons/StarIcon";
import React from "react";

export const renderRating = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i}>
        <StarIcon color="#FFC700" />
      </span>
    );
  }
  for (let i = rating; i < 5; i++) {
    stars.push(
      <span key={i}>
        <StarIcon color="#9F9F9F" />
      </span>
    );
  }
  return stars;
};
