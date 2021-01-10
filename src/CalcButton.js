import React from 'react';

export default function CalcButton(props) {
    return (
        <div style={{
            width: "100px",
            height: "100px",
            background: "gray"
        }}>
            <p>{props.operand}</p>
        </div>
    );
}
