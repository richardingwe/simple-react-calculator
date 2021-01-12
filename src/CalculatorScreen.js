import React from 'react';
import "./CalculatorScreen.css";

export default function CalculatorScreen({ value, answer }) {
    // const [inputVal, setInputVal] = useState("");
    // const handleChange = (e) => {
    //     setInputVal(e.target.value);
    // };
    return (
        <div className="screen">
            {/* <form>
                <input type="text" name="name" value={value} onChange={handleChange} placeholder="0" />
            </form> */}
            <div className="screenValue">
                <p>{value}</p>
            </div>
            <div className="answer">
                <p>{answer}</p>
            </div>

        </div>
    );
}
