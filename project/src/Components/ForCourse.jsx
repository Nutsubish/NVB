import { Link } from "react-router-dom"


const ForCourse = () => {
    return(
        <>
            <div id="lessons-div">
                <Link to={"/Courses/p1"} id="linkid">
                    <div className="lesson"><span className="lesson-span"><i class="fa-solid fa-quote-left"></i> Coding Syntax</span> <span>❌</span></div>
                </Link>
                <Link to={"/Courses/p2"} id="linkid2">
                    <div className="lesson"><span className="lesson-span"><i class="fa-solid fa-print"></i> Print Function</span> <span>❌</span></div>
                </Link>
                <Link to={"/Courses/p7"}> 
                    <div className="lesson"><span className="lesson-span"><i class="fa-solid fa-box"></i> Creating Variables</span> <span>❌</span></div>
                </Link>
            </div>
        </>
    )
}
export default ForCourse

// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ