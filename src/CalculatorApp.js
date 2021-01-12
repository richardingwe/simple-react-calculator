import React, { useState, useEffect } from 'react';
import CalcButton from './CalcButton';
import CalculatorScreen from "./CalculatorScreen";
import "./CalculatorApp.css";

export default function CalculatorApp(props) {
    let [value, setValue] = useState('');
    let [answer, setAnswer] = useState('');
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
    return (
        <div className="AppContainer">
            <h1>React Calculator</h1>
            <CalculatorScreen value={value} answer={answer} />
            <div className="keys">
                <div>
                    <div className="operators1">
                        {props.operators.map((button, idx) => (
                            <CalcButton key={idx} dataNum={button} addDataNum={addDataNum} />
                        ))}
                        <div className="button" onClick={clear}>
                            <p>C</p>
                        </div>
                    </div>
                    <div className="buttons">
                        {props.numButtons.map((button, idx) => (
                            <CalcButton key={idx} dataNum={button} addDataNum={addDataNum} />
                        ))}
                        <div className="button" onClick={solve}>
                            <p>=</p>
                        </div>
                    </div>
                </div>
                <div className="operators2">
                    <div className="button clear" onClick={solve}>
                        <p>clear</p>
                    </div>
                    {props.operators2.map((button, idx) => (
                        <CalcButton key={idx} dataNum={button} addDataNum={addDataNum} />
                    ))}
                </div>
            </div>
        </div>
    );
}

CalculatorApp.defaultProps = {
    numButtons: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'],
    operators: ['(', ')', '%'],
    operators2: ["/", "*", "-", "+"]
};



