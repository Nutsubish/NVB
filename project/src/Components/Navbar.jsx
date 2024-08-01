import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <>
            <nav id="navbar">
                <div id="logo-div">
                    <p className="logo-p goa">{"<GOA>"}</p>
                    <p className="logo-p academy">{"<ACADEMY>"}</p>
                </div>

                <div id="navbar-a">
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/Courses"}>
                    <a className="Course">Course</a>
                </Link>
                <Link to={"/Abouts"}>
                    <a className="About">About</a>
                </Link>

                </div>
                <div id="sign-up">
                <Link to={"/SignUp"}>
                    <p id="sign-up-p">Register</p>
                </Link>
                </div>
            </nav>


        </>
    )
}
export default Navbar


// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ