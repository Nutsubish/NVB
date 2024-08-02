import { Link } from "react-router-dom";
import React from "react";
import { useState} from "react";

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
        <div id="main-body-div">

            <div id="main-lesson-div">

                    <p id="lesson1-p">Task No.1</p>

                    <div id="back-menu">

                    <Link to={"/Courses"}>
                        <button id="back-btn">X Back to Menu</button>
                    </Link>

                    </div>

                    <div id="test-div">

                        <p id="test-p">
                            print(
                            <input type="text" value={inputValue} onChange={handleInputChange} className="lesson-input"/>
                            Hello
                            <input type="text" value={inputValue2} onChange={handleInputChange2} className="lesson-input" />
                            )
                        </p>

                    </div>
            </div>
                        <Link to={"/Courses/p3"}>
                            <button id="next-btn" disabled={inputValue != '"' || inputValue2 != '"'}>Next Task</button>
                        </Link>

        </div>
        </>
    );
}

export default Ex1


