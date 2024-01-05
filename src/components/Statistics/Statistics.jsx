import React from 'react';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.statisticContainer}>
        <p className={css.statisticsInfo}> Good: {good} </p>
        <p className={css.statisticsInfo}> Neutral: {neutral} </p>
        <p className={css.statisticsInfo}> Bad: {bad} </p>
        <p className={css.statisticsInfo}> Total: {total}</p>
        <p className={css.statisticsInfo}>
          Positive feedbacks: {positivePercentage} %
        </p>
      </div>
    </>
  );
};
