import React from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ev => {
    const { name } = ev.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);

        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const totalFeedbacks = countTotalFeedback();

  const countPercentage = totalFeedbacks => {
    return Math.round((Number(good) / Number(totalFeedbacks)) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={countPercentage(totalFeedbacks)}
          />
        )}
      </Section>
    </>
  );
};
