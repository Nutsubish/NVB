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
        <div id="main-body-div">
            <div id="main-lesson-div">
                <h1 id='lesson1-p'>Task No.1</h1>
                <h1>Fix this Code</h1><br></br>

                <div id='p2-l1'>
                    <input type="text" id='lesson-input' value={inputValue} onChange={handleInputChange} />
                    <p id='p2-l1-p'>("Hello World")</p>
                </div>

                <div id='buttons-div3'>
                    <Link to={"/Courses/p4"}>
                        <button disabled={disabled} id='next2-btn' >Next Task</button>
                    </Link>

                    <Link to={"/Courses"}>
                        <button id='prev-btn'>Back to Menu</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Ex2;

