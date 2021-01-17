import React, { useState } from 'react';
import CalcButton from './CalcButton';
import CalculatorScreen from "./CalculatorScreen";
import History from "./History";
import { evaluate } from "mathjs";
import "./CalculatorApp.css";

export default function CalculatorApp(props) {
    let [value, setValue] = useState('');
    let [answer, setAnswer] = useState('');
    let [showHistory, setShowHistory] = useState(false);
    let [history, setHistory] = useState([{ value: " " }]);
    const addDataNum = (val) => {
        setValue(value += val);
    };
    const solve = () => {
        setAnswer(evaluate(value).toString());
        const newHistory = [{ value, answer }, ...history];
        setHistory(newHistory);
    };
    const clearAll = () => {
        setValue('');
        setAnswer('');
    };
    const clear = () => {
        let cleared = value.slice(0, value.length - 1);
        setValue(cleared);
    };
    const handleHistory = () => {
        setShowHistory(!showHistory);
    };
    // useEffect(() => {

    // }, []);
    return (
        <div className="AppContainer">
            <h1>React Calculator</h1>
            {showHistory && <History history={history} handleHistory={handleHistory} />}
            <CalculatorScreen value={value} answer={answer} history={history} handleHistory={handleHistory} />
            <div className="keys">
                <div>
                    <div className="operators1">
                        {props.operators.map((button, idx) => (
                            <CalcButton key={idx} dataNum={button} addDataNum={addDataNum} />
                        ))}
                        <div className="button" onClick={clearAll}>
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
                    <div className="button clear" onClick={clear}>
                        <p><i className="fa fa-backspace" /></p>
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



