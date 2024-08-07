import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [hearts, setHearts] = useState(5);

    useEffect(() => {

        const specialKeys = ['L1Task3a', 'L1Task3','L3Task1','L3Task1a'];
        let heartsToSubtract = 0;

 
        specialKeys.forEach((key) => {
            if (localStorage.getItem(key)) {
                heartsToSubtract += 1;
            }
        });


        const newHearts = Math.max(hearts - heartsToSubtract, 0);
        setHearts(newHearts);

  
        localStorage.setItem('hearts', newHearts);
    },[]);

    // useEffect(() => {
    //     localStorage.setItem('hearts', hearts);
    // }, [hearts]);

    return (
        <>
            <nav id="navbar">
                <div id="logo-div">
                    <p className="logo-p goa">{"<NVB>"}</p>
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
                
                <div id="hearts">
                    <span>{hearts}</span>
                    <span>🤍</span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;


// ვანო თუ მოგინდება შელამაზება ჩათვლაე <Link> არის ჰტმლ ელემენტი მაგას id შეგიძლია მიანიჭო და შიგნით მაგ ლინკებში
// როგორც გინდა ისე დაწერე ჰტმლ