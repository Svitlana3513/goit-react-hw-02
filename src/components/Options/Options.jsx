import css from './Options.module.css';

export default function Options() {
    return (
        <ul className={css.ul}>
            <li>
                <button>Good</button>
            </li>
            <li>
                <button>Neutral</button>
            </li>
            <li>
                <button>Bad</button>
            </li>
            <li>
                <button>Reset</button>
            </li>
        </ul>
    )
}