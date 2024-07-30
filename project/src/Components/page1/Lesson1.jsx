import { Link } from "react-router-dom";

const Ex1 = () =>{
    return (
        <>
            <h1>Hello This is Lesson 1 Task 1</h1>
            <Link to={"/Courses/p3"}>
                <button>Next Task</button>
            </Link>
            <Link to={"/Courses"}>
                <button>Back to Menu</button>
            </Link>
        </>
    );
}

export default Ex1
