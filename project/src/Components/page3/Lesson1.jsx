import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ex3 = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
        if (button == 'myvariable') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <>
            <h1>Hello this is Lesson3 Task1 </h1>
            <p>How To Create Variable Properly?</p>

            <button onClick={() => handleButtonClick('.-myvariable')} id="vanobtn">
                .-myvariable
            </button>

            <button onClick={() => handleButtonClick('my-variable')} id="vanosbtn">
                my-variable
            </button>

            <button onClick={() => handleButtonClick('myvariable')} id="vanos btn 2">
                myvariable
            </button>

            {(() => {
                if (isCorrect) {
                    return (
                        <Link to="/Courses/p8">
                            <button id='nextbtn'>Next Task</button>
                        </Link>
                    );
                } else {
                    return(
                        <button disabled>Next Task</button>
                    );
                }
            })()}
        </>
    );
};

export default Ex3;
