import React from 'react';
import CalcButton from './CalcButton';
import CalculatorScreen from "./CalculatorScreen";
import "./CalculatorApp.css";

export default function CalculatorApp(props) {
    return (
        <div className="AppContainer">
            <h1>React Calculator</h1>
            <CalculatorScreen />
            <div className="buttons">
                {props.numButtons.map((button, idx) => (
                    <CalcButton key={idx} operand={button} />
                ))}
            </div>
        </div>
    );
}

CalculatorApp.defaultProps = {
    numButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "C", "="]
};



