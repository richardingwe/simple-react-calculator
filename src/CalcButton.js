import React from 'react';
import "./CalcButton.css";

export default function CalcButton(props) {
    const { addDataNum } = props;
    return (
        <div className="button" onClick={() => addDataNum(props.dataNum)}>
            <p>{props.dataNum}</p>
        </div>
    );
}
