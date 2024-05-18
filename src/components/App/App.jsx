import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from "../Description/Description";
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';


export default function App() {
    const [feedback, setFeedback] = useState(()=>{
        const savedFeedback = window.localStorage.getItem('saved-feedback');
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        }
    });
    const handleFeedback=(feedbackType)=>{
        setFeedback(
            {...feedback,
                [feedbackType]: feedback[feedbackType] + 1
            }
        )
    }
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
    const resetFeedback = () => { setFeedback({ good: 0, neutral: 0, bad: 0 }) };
    useEffect(() => {
        window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
    }, [feedback]);
    return (
        <div className={css.container}>
            <Description />
            <Options
                totalFeedback={totalFeedback}
                handleFeedback={handleFeedback}
                resetFeedback={resetFeedback} />
            {totalFeedback !== 0 ? (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
            />
            ) : (
                    <Notification/>
            )
                }
            
            
        </div>
    )
}