import { Link } from "react-router-dom";

const Lesson1Task2 = () =>{
    return(
        <>
            <h1>Hello This is Lesson1 Task2</h1>
            <Link to={"/Courses/p5"}>
                <button>Next Task</button>
            </Link>
            <Link to={"/Courses/p1"}>
                <button>Previous Task</button>
            </Link>
        </>
    );
}

export default Lesson1Task2