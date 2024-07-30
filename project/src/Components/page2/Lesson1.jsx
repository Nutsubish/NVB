import { Link } from "react-router-dom";



const Ex2 = () =>{
    return (
        <>
            <h1>Hello this is Lesson 2 Task 1</h1>
            <Link to={"/Courses/p4"}>
                <button>Next Task</button>
            </Link>
            <Link to={"/Courses"}>
                <button>Back to Menu</button>
            </Link>
        </>
    );
}

export default Ex2
