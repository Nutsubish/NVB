import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lesson3Task2 = () =>{
    return(
        <>
        <h1>hello this Lesson 3 task 2</h1>
        <p></p>
        <Link to={"/Courses/p9"}>
            <button>Next Task</button>
        </Link>
        <Link to={"/Courses/p7"}>
            <button>Previous Task</button>
        </Link>
        </>
    )
}

export default Lesson3Task2