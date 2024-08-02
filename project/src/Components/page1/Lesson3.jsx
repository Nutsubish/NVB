import React, { useState, useEffect } from 'react';
import { Link, json } from 'react-router-dom';

const Lesson1Task3 = () =>{
    const [selectedButton, setSelectedButton] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
        if (button == 'Dynamic') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };
    useEffect(()=>{
        
    },[])


    return(
        <> 
            <h1> Lesson 1 task 3</h1>
            <br/>
            <h1>What Type of Language is Python?</h1>
            <br/>
            <button onClick={() => handleButtonClick('Dynamic')}>Dynamic</button>
            <br/>
            <button onClick={() => handleButtonClick('Not a language,It is library')}>Not a language, It is library</button>
            <br/>
            <button onClick={() => handleButtonClick('Python is Snake')}>Python is Snake </button>
            <br/>
            {(() => {
                if (isCorrect == true) {
                    return (
                        <Link to="/Courses">
                            <button id='nextbtn'>Next Task</button>
                        </Link>
                    );
                } else {
                    return(
                        <button disabled>Next Task</button>
                    );
                }
            })()}
            <Link to={"/Courses/p3"}>
                <button>previous Task</button>
            </Link>
        </>
    )
}

export default Lesson1Task3