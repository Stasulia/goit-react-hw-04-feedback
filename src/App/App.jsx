import { useState } from 'react';
import { FeedbackOptions } from '../components/Feedback/FeedbackOptions';
import { Notification } from '../components/Notification/Notification';
import { Section } from '../components/Section/Section';
import { Statistics } from '../components/Statistics/Statistics';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100 || 0);

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.styled}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
          onTotal={countTotalFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There  is  no  feedback" />
        )}
      </Section>
    </div>
  );
};
