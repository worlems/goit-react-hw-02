import React from "react";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="feedback">
      <h2 className="feedback-title">Statistics</h2>
      <p>
        <strong>Good:</strong> {good}
      </p>
      <p>
        <strong>Neutral:</strong> {neutral}
      </p>
      <p>
        <strong>Bad:</strong> {bad}
      </p>
      <p>
        <strong>Total:</strong> {total}
      </p>
      <p>
        <strong>Positive feedback:</strong> {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
