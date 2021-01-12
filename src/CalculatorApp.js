import React, { useState, useEffect } from 'react';
import CalcButton from './CalcButton';
import CalculatorScreen from "./CalculatorScreen";
import "./CalculatorApp.css";

export default function CalculatorApp(props) {
    let [value, setValue] = useState('');
    let [answer, setAnswer] = useState(0);
    const addDataNum = (val) => {
        setValue(value += val);
    };
    const solve = () => {
        setAnswer(eval(value));
    };
    const clear = () => {
        setValue('');
        setAnswer('');
    };

    useEffect(() => {
        // alert(value);
    }, [value]);
    return (
        <div className="AppContainer">
            <h1>React Calculator</h1>
            <CalculatorScreen value={value} answer={answer} />
            <div className="buttons">
                {props.numButtons.map((button, idx) => (
                    <CalcButton key={idx} dataNum={button} addDataNum={addDataNum} />
                ))}
                <div className="button" onClick={solve}>
                    <p>=</p>
                </div>
                <div className="button" onClick={clear}>
                    <p>C</p>
                </div>
            </div>
        </div>
    );
}

CalculatorApp.defaultProps = {
    numButtons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', "+", "-", "*", "/"]
};



