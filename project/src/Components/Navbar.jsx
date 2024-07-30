import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <>
            <nav id="navbar">
                <Link to={"/"}>
                    <a className="Home">Home</a>
                </Link>
                <Link to={"/Courses"}>
                    <a className="Course">Course</a>
                </Link>
                <Link to={"/Abouts"}>
                    <a className="About">About</a>
                </Link>
            </nav>
        </>
    )
}
export default Navbar


// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ