import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Lesson2Task2 = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    return (
        <>
            <h1>Hello this is Lesson 2 Task 2</h1>
            <p>Fix this Code</p>
            <div>
                print
                <input type="text" value={inputValue} onChange={handleInputChange} id="vanogastile" />
                "Hello"
                <input type="text" value={inputValue2} onChange={handleInputChange2} id="vanogastile" />
            </div>
            <Link to={"/Courses/p6"}>
                <button disabled={inputValue != '(' || inputValue2 != ')'}>Next Task</button>
            </Link>
            <Link to={"/Courses/p2"}>
                <button>Previous Task</button>
            </Link>
        </>
    );
}

export default Lesson2Task2;
