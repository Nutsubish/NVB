import { Link } from "react-router-dom"


const Lesson1Task3 = () =>{
    return(
        <>
            <h1>This is Lesson 1 Final Task</h1>
            <p>If You Came So Far </p>
            <p>Go Checkout Lesson2</p>
            <Link to={"/Courses/p3"}>
                <button>Previous Task</button>
            </Link>
            <Link to={"/Courses"}>
                <button>Main Menu</button>
            </Link>
        </>
    )
}

export default Lesson1Task3