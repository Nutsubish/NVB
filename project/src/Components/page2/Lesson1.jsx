import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ex2 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <h1 id='hellovano'>Hello this is Lesson 2 Task 1</h1>
            <p id="vanos">Fix this Code</p>
            <p id="vano">
                <input type="text" value={inputValue} onChange={handleInputChange} />
                ("Hello World")
            </p>
            <Link to={"/Courses/p4"} >
                <button disabled={inputValue !== 'print'} id='vano'>Next Task</button>
            </Link>
            <Link to={"/Courses"}>
                <button>Back to Menu</button>
            </Link>
        </>
    );
}

export default Ex2;

