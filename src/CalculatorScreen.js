import React from 'react';
import "./CalculatorScreen.css";

export default function CalculatorScreen({ value, answer, history, handleHistory }) {
    return (
        <div className="screen">
            <div className="history" onClick={handleHistory}>
                <p>{(history[0].value || history[1].value) !== " " ? <i className="fa fa-arrows-v" /> : " "} {history[0].value || history[1].value}</p>
            </div>
            <div className="screenValue">
                <p>{value}</p>
            </div>
            <div className="answer">
                {answer && <p>= {answer} </p>}
            </div>
        </div>
    );
}
