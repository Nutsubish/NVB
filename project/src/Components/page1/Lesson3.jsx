import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson1Task3 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const isButtonDisabled = inputValue !== '1';

    return (
        <>
            <div id="main-body-div">
                <div id="main-lesson-div">
                    <p id="lesson1-p">Task No.3</p>
                    <div id="back-menu">
                        <Link to={"/Courses"}>
                            <button id="back-btn">X Back to Menu</button>
                        </Link>
                    </div>

                    <div id="test-div">
                        <p className="output-p">What is the output of this code?</p>
                        <p className="output-p">print(5 % 2)</p><br />
                        <input 
                            type="text" 
                            id="lesson2-input" 
                            value={inputValue} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div id="navigation-buttons">
                        <Link to={"/Courses/p3"}>
                            <button id="prev-btn">Previous Task</button>
                        </Link>
                        <Link to={"/Courses"}>
                            <button id="next2-btn" disabled={isButtonDisabled}>Next Lessons</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lesson1Task3