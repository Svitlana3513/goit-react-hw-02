import css from './Options.module.css';

export default function Options({handleFeedback, resetFeedback, totalFeedback}) {
    return (
        <ul className={css.ul}>
            <li>
                <button type='button' onClick={()=>handleFeedback("good")}>Good</button>
            </li>
            <li>
                <button type='button' onClick={()=>handleFeedback("neutral")}>Neutral</button>
            </li>
            <li>
                <button type='button' onClick={()=>handleFeedback("bad")}>Bad</button>
            </li>
            {totalFeedback > 0 && (
                <button type='button' onClick={resetFeedback}>Reset</button>
            )
            }
        </ul>
    )
}