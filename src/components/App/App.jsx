import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from "../Description/Description";
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';


export default function App() {
    const { state, setState } = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    return (
        <div className={css.container}>
            <Description />
            <Options />
            <Feedback feedback={state}/>
            
        </div>
    )
}