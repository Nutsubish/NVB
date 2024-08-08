import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lesson3Task3 = () =>{
    return(
        <>
        <div id="main-body-div">
            <div id="main-lesson-div">
                <h1>Task No.3</h1>

                <div id='buttons-div3'>
                    <Link to={"/Courses"}>
                        <button id='next2-btn' onClick={window.localStorage.setItem('task3','done')}>Continue</button>
                    </Link>
                    <Link to={"/Courses/p8"}>
                        <button id='prev-btn'>Previous Task</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Lesson3Task3