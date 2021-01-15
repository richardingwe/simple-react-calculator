import React from 'react';
import "./History.css";

export default function History({ history, handleHistory }) {
    return (
        <div className="History">
            <span className="close" onClick={handleHistory}>&#10006;</span>
            {history.map((his, i) => (<div key={i}><p className="history-value">{his.value}</p> <p className="history-answer">{his.answer}</p></div>))}
        </div>
    );
}
