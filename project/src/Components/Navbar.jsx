import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <>
            <nav id="navbar">
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/Courses"}>
                    <a className="Course">Course</a>
                </Link>
                <Link to={"/Abouts"}>
                    <a className="About">About</a>
                </Link>
                <Link to={"/SignUp"}>
                    <a>Signup</a>
                </Link>
            </nav>


        </>
    )
}
export default Navbar


// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ