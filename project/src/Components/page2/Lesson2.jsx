import { Link } from "react-router-dom";

const Lesson2Task2 = () =>{
    return(
        <>
            <h1>Hello This is Lesson2 Task 2</h1>

            
            <Link to={"/Courses/p6"}>
                <button>Next Task</button>
            </Link>
            <Link to={"/Courses/p2"}>
                <button>Previous Task</button>
            </Link>
        </>
    );
}

export default Lesson2Task2