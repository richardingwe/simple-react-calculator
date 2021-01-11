import React, { useState } from 'react';

export default function CalculatorScreen({ value }) {
    const [inputVal, setInputVal] = useState("");
    const handleChange = (e) => {
        setInputVal(e.target.value);
    };
    return (
        <div>
            <form>
                <input type="text" name="name" value={value} onChange={handleChange} placeholder="0" />
            </form>
        </div>
    );
}
