import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ex2 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const disabled = inputValue !== 'print'
    return (
        <>
            <h1>Hello this is Lesson 2 Task 1</h1>
            <h1>Fix this Code</h1>

            <div>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                ("Hello World")
            </div>

            <Link to={"/Courses/p4"}>
                <button disabled={disabled} >Next Task</button>
            </Link>

            <Link to={"/Courses"}>
                <button>Back to Menu</button>
            </Link>
            
        </>
    );
}

export default Ex2;

