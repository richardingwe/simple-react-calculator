import React from 'react';
import "./CalcButton.css";

export default function CalcButton(props) {
    return (
        <div className="button">
            <p>{props.operand}</p>
        </div>
    );
}
