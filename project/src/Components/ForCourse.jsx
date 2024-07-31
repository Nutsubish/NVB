import { Link } from "react-router-dom"


const ForCourse = () => {
    return(
        <>

                <Link to={"/Courses/p1"} id="linkid">
                    <div id="idk">Lesson 1</div>
                </Link>
                <Link to={"/Courses/p2"} id="linkid2">
                    <div id="idk2">Lesson 2</div>
                </Link>
                <Link to={"/Courses/p7"}> 
                    <div id="idk3">Lesson 3</div>
                </Link>
        </>
    )
}
export default ForCourse

// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ