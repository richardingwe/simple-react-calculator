import React from 'react';
import CalcButton from './CalcButton';
import CalculatorScreen from "./CalculatorScreen";

export default function CalculatorApp(props) {
    return (
        <div>
            <h1>This is the app body</h1>
            <CalculatorScreen />
            {props.numButtons.map((button, idx) => (
                <CalcButton key={idx} operand={button} />
            ))}
        </div>
    );
}

CalculatorApp.defaultProps = {
    numButtons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"]
};



