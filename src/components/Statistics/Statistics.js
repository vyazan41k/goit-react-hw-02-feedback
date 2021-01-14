import React from 'react';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="No feedback given" />;
  } else {
    return (
      <div className="feedback-statistic">
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
};

export default Statistics;
