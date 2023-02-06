import {useState} from "react";
import FeedbackOptions from './FeedbackOptions';
import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle";
import Notification from "./Notification";
import css from '../../src/components/App.module.css';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const handlBtn = name => {
    setVotes(prevState => {
      const value = prevState[name]
      return { ...prevState, [name]: value + 1};
    });
  };
  const total = votes.good + votes.neutral + votes.bad;

  const calcPercent = (propName) => {
    return total === 0 || propName === 0 ? 0
      : ((propName / total) * 100).toFixed(2);
  };
  
  const options = Object.keys(votes);
          return (
              <div className={css.wrap}>
              <SectionTitle title="Please leave feedback">
                <FeedbackOptions
                  handlBtn={handlBtn}
                  options={options}/>
              </SectionTitle>
              <SectionTitle title="Statistics">
                      {total> 0 ?
                          <Statistics
                              good={votes.good}
                              neutral={votes.neutral}
                              bad={votes.bad}
                              total={total}
                              positiveFeedback={calcPercent(votes.good)}
                          />
                          : <Notification message="There is no feedback"/>}
                  </SectionTitle>
                  </div>
          );
}

export default App;