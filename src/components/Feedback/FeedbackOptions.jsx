import React from 'react';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackForm}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.feedbackBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
