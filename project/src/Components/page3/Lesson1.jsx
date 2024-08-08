import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ex3 = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
        if (button == 'myvariable') {
            setIsCorrect(true);
        } else if (button == '.-myvariable'){
            setIsCorrect(false);
            localStorage.setItem('L3Task1','incorrect')
        }else if(button == 'my variable'){
            setIsCorrect(false);
            localStorage.setItem('L3Task1a','incorrect')
        }
    };

    return (
        <>
            <div id="main-body-div">
                <div id="main-lesson-div">
                    <h1 id='lesson1-p'>Task1 </h1>
                    <h1>How To Create Variable Properly?</h1><br></br>
                
                <div id='p3-l1-div'>
                    <button onClick={() => handleButtonClick('.-myvariable')} className='button-answer'>
                        .-myvariable
                    </button>

                    <button onClick={() => handleButtonClick('my variable')} className='button-answer'>
                        my variable
                    </button>

                    <button onClick={() => handleButtonClick('myvariable')} className='button-answer'>
                        myvariable
                    </button>
                </div><br></br>

                <div>
                    {(() => {
                        if (isCorrect == true) {
                            return (
                                <Link to="/Courses/p8">
                                    <button id='next2-btn'>Next Task</button>
                                </Link>
                            );
                        } else {
                            return(
                                <button id='disabled-btn' disabled>Next Task</button>
                            );
                        }
                    })()}
                </div>
                </div>
            </div>
        </>
    );
};

export default Ex3;
