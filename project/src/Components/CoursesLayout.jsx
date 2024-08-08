import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import ForCourse from "./ForCourse";
import ForCourse1 from "./ForCourse1";




const CoursesLayout = () =>{
    return(
        <>
            <Link to="/Courses/Python">
                <h1>Introduction to Python</h1>
            </Link>
            <Link to="/Courses/Html">
                <h1>Introduction to HTML</h1>
            </Link>
        </>
    );
}
export default CoursesLayout