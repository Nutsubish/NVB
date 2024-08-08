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
        <div id="main-body-div">
            <div id="main-lesson-div">
                <h1 id="lesson1-p">Task No.2</h1>
                <p id="fix-p">Fix this Code</p><br></br>
                <div id="p2-l1">
                    <p id="p2-l1-p">print</p>
                    <input type="text" value={inputValue} onChange={handleInputChange} id="lesson-input" />
                    <p id="p2-l1-p">"Hello"</p>
                    <input type="text" value={inputValue2} onChange={handleInputChange2} id="lesson-input" />
                </div>

                <div id="buttons-div3">
                    <Link to={"/Courses/p6"}>
                        <button id="next2-btn" disabled={inputValue != '(' || inputValue2 != ')'}>Next Task</button>
                    </Link>
                    <Link to={"/Courses/p2"}>
                        <button id="prev-btn">Previous Task</button>
                    </Link>
                </div>

                </div>
            </div>
        </>
    );
}

export default Lesson2Task2;
