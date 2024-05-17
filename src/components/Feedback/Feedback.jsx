
export default function Feedback({feedback: {good, neutral, bad}, totalFeedback, positiveFeedback}) {
    return (
        <ul>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {totalFeedback}</p>
            </li>
            <li>
                <p>Positive: {positiveFeedback}%</p>
            </li>   
        </ul>
    );
}