import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lesson1Task3 = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
        if (button === 'Dynamic') {
            setIsCorrect(true);
        } else if (button === 'Not a language, It is library') {
            setIsCorrect(false);
            localStorage.setItem('L1Task3','incorrect')
        } else if (button === 'Python is Snake') {
            setIsCorrect(false);
            localStorage.setItem('L1Task3a','incorrect')
            
        }
    };

    return (
        <> 
        <div id="main-body-div">

            <div id="main-lesson-div">
                <h1 id='lesson1-p'>Task No.3</h1>
                <br />
                <h1>What Type of Language is Python?</h1>
                <br />
                <button onClick={() => handleButtonClick('Dynamic')} className='button-answer'>Dynamic</button>
                <br />
                <button onClick={() => handleButtonClick('Not a language, It is library')} className='button-answer'>Not a language, It is library</button>
                <br />
                <button onClick={() => handleButtonClick('Python is Snake')} className='button-answer'>Python is Snake</button>
                <br />

                <div id='buttons-div3'>
                    {isCorrect ? (
                        <Link to="/Courses">
                            <button id='next2-btn' onClick={() => window.localStorage.setItem('task1', 'done')}>Next Task</button>
                        </Link>
                    ) : (
                        <button disabled id='disabled-btn'>Next Task</button>
                    )}
                    <Link to={"/Courses/p3"}>
                        <button id='prev-btn'>Previous Task</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};



export default Lesson1Task3;
