
export default function Feedback({feedback: {good, neutral, bad}, totalFeedback}) {
    return (
        <ul>
            <li>good: {good}</li>
            <li>neutral: {neutral}</li>
            <li>bad: {bad}</li>
      
      
        </ul>
    );
}