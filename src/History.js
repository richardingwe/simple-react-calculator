import React from 'react';

export default function History({ history }) {
    return (
        <div>
            {history.map(his => (<div><p>{his.value}</p> <p>{his.answer}</p></div>))}
        </div>
    );
}
