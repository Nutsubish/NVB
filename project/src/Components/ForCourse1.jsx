
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";



export default function ForCourse1(){

    const [isDone,SetisDone] = useState(false)

    return(
        <>
            <div>
                
            </div>
            <Link to="/Courses">
                <button>
                    Back To Menu
                </button>
            </Link>
        </>
    );
}