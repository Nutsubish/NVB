import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Ex1 = () =>{
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const [inputValue2, setInputValue2] = useState('');

    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
    };


    return (
        <>
            <h1>Hello This is Lesson 1 Task 1</h1>
            <p>
                print(
                <input type="text" value={inputValue} onChange={handleInputChange} />
                Hello
                <input type="text" value={inputValue2} onChange={handleInputChange2} />
                )
            </p>
            <Link to={"/Courses/p3"}>
                <button disabled={inputValue != '"' || inputValue2 != '"'}>Next Task</button>
            </Link>
            <Link to={"/Courses"}>
                <button>Back to Menu</button>
            </Link>
        </>
    );
}

export default Ex1
