import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ForCourse = () => {
    const [isDone, setIsDone] = useState(false);
    const [isDone2, setIsDone2] = useState(false);
    const [isDone3, setIsDone3] = useState(false);

    useEffect(() => {
            if (window.localStorage.getItem('task1')) {
            setIsDone(true);
        }
    }, []);

    useEffect(()=>{
        if(window.localStorage.getItem('task2')){
            setIsDone2(true)
        }
    },[]);

    useEffect(()=>{
        if(window.localStorage.getItem('task3')){
            setIsDone3(true)
        }
    },[]);




    return (
        <>
            <header>
                <div class="container2">
                    <h1>Introduction to <span id="python-span1">Pyt</span><span id="python-span2">hon</span></h1>
                </div>
            </header>
            <div id="lessons-div">
                <Link to={"/Courses/p1"} id="linkid">
                    <div className="lesson">
                        <span className="lesson-span"><i className="fa-solid fa-quote-left"></i> Coding Syntax</span> 
                        <span>{isDone ? "✔️" : "🏁"}</span>
                    </div>
                </Link>
                
                {isDone ? (
                    <Link to={"/Courses/p2"} id="linkid2">
                        <div className="lesson">
                            <span className="lesson-span"><i className="fa-solid fa-print"></i> Print Function</span> 
                            <span>{isDone2 ? "✔️" : ""}</span>
                        </div>
                    </Link>
                ) : (
                    <div className="lesson disabled lesson-disabled">
                        <span className="lesson-span"><i className="fa-solid fa-print"></i> Print Function</span> 
                        <span>❌</span>
                    </div>
                )}
                {isDone2 ?(

                    <Link to={"/Courses/p7"}>
                    <div className="lesson">
                        <span className="lesson-span"><i className="fa-solid fa-box"></i> Creating Variables</span> 
                        <span>{isDone3 ? "✔️" : ""}</span>
                    </div>
                </Link>
                ):(

                    <div className="lesson disabled lesson-disabled">
                        <span className="lesson-span"><i className="fa-solid fa-box"></i> Creating Variables</span> 
                        <span>❌</span>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default ForCourse;



// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ