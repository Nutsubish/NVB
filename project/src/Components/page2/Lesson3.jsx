import { Link } from "react-router-dom"


const Lesson2Task3 = () =>{
    return(
        <>
        <div id="main-body-div">
            <div id="main-lesson-div">
            <h1 id="lesson1-p">Final Task</h1><br></br>
            <p className="l3-p">You came So Far! I hope You Did</p>
            <p className="l3-p">All the task without loosing a heart</p><br></br>
            <p id="emojis">🎉🎉🎉</p>

            <div id="buttons-div3">
                <Link to={"/Courses/p4"}>
                    <button id="prev-btn">Previous Task</button>
                </Link>
                <Link to={"/Courses"}>
                    <button id="next2-btn" onClick={window.localStorage.setItem('task2','done')}>Continue</button>
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Lesson2Task3