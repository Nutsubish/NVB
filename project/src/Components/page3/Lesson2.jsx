import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lesson3Task2 = () =>{
    return(
        <>
        <div id="main-body-div">
            <div id="main-lesson-div">
                <h1>Task No.2</h1>
                <p></p>

                <div id='buttons-div3'>
                    <Link to={"/Courses/p9"}>
                        <button id='next2-btn'>Next Task</button>
                    </Link>
                    <Link to={"/Courses/p7"}>
                        <button id='prev-btn'>Previous Task</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Lesson3Task2