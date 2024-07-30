import { Link } from "react-router-dom"


const Lesson2Task3 = () =>{
    return(
        <>
            <h1>This is Lesson 2 Final Task</h1>
            <p>You came So Far! I hope You Did</p>
            <p>All the task without loosing a heart</p>

            <Link to={"/Courses/p4"}>
                <button>Previous Task</button>
            </Link>
            <Link to={"/Courses"}>
                <button>Continue</button>
            </Link>
        </>
    )
}

export default Lesson2Task3