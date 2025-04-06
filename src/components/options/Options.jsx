import React from "react";

const Options = ({ onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <div className="options">
      <button onClick={() => onLeaveFeedback("good")} className="btn">
        Good
      </button>
      <button onClick={() => onLeaveFeedback("neutral")} className="btn">
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback("bad")} className="btn">
        Bad
      </button>
      {hasFeedback && (
        <button onClick={onReset} className="btn reset">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
