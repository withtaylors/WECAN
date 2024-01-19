import React from "react";

export default function SingleTweet({ review }) {
  return (
    <div className="review">
      <div className="writer">{review.writer}</div>
      <div className="date">{review.date}</div>
      <div className="content">{review.content}</div>
    </div>
  );
}
