import { Link } from "react-router-dom"


const Lesson1Task3 = () =>{
    return(
        <>
            <h1>This is Lesson 1 Final Task</h1>
            <Link to={"/Courses/p3"}>
                <button>Previous Task</button>
            </Link>
        </>
    )
}

export default Lesson1Task3