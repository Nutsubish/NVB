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
            <h1>Lesson 1 Task 3</h1>
            <br />
            <h1>What Type of Language is Python?</h1>
            <br />
            <button onClick={() => handleButtonClick('Dynamic')}>Dynamic</button>
            <br />
            <button onClick={() => handleButtonClick('Not a language, It is library')}>Not a language, It is library</button>
            <br />
            <button onClick={() => handleButtonClick('Python is Snake')}>Python is Snake</button>
            <br />
            {isCorrect ? (
                <Link to="/Courses">
                    <button id='nextbtn' onClick={() => window.localStorage.setItem('task1', 'done')}>Next Task</button>
                </Link>
            ) : (
                <button disabled>Next Task</button>
            )}
            <Link to={"/Courses/p3"}>
                <button>Previous Task</button>
            </Link>
        </>
    );
};

export default Lesson1Task3;
