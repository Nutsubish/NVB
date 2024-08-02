import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lesson3Task3 = () =>{


    return(
        <>
        <h1>hello this Lesson 3 task 3</h1>
        <Link to={"/Courses"}>
            <button>Next Task</button>
        </Link>
        <Link to={"/Courses/p8"}>
            <button>Previous Task</button>
        </Link>
        </>
    )
}

export default Lesson3Task3