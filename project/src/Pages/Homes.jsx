import { Link, Route, Router, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import PythonLogo from "../assets/Python-Emblem.png"
import goalogo from "../assets/goa pfp.jpg"
import goagif from "../assets/github.gif"


const Homes = () => {
    return(
    <>
        <header>
        <div class="container2">
            <h1>Welcome to <span>GOA Academy</span></h1>
            <p>Your Gateway to Mastering Programming</p>
        </div>
    </header>
    <section class="intro">
        <div class="container">
            <div>
                <h2 id="green-h2">Why Choose GOA Academy?</h2>
                <ul>
                    <li><b>Expert Instructors:</b> Learn from industry professionals with real-world knowledge.</li>
                    <li><b>Cutting-Edge Curriculum:</b> Stay ahead with the latest technologies and best practices.</li>
                    <li><b>Flexible Learning:</b> Access content anytime, anywhere, and progress at your own pace.</li>
                    <li><b>Hands-On Projects:</b> Build practical skills through interactive projects and applications.</li>
                    <li><b>Community Support:</b> Join a vibrant community for networking, support, and collaboration.</li>
                    <li><b>Real-World Applications:</b> Work on projects real-world scenarios to better prepare you for the job market.</li>
                </ul>
            </div>

            <div>
            <iframe src="https://www.youtube.com/embed/v-7UKoYWhA0?si=VZufe5THvQJiInsO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </section>
    <section class="courses">
        <div class="container">
            <div>
                <h2 id="green-h2">Explore Our Courses</h2>
                <p>Our diverse range of courses caters to various interests and skill levels, including:</p>
                <ul>
                    <li><b>Web Development:</b> HTML, CSS, JavaScript, and beyond.</li>
                    <li><b>Data Science:</b> Python, R, machine learning, and data visualization.</li>
                    <li><b>Mobile App Development:</b> Build apps for iOS and Android.</li>
                    <li><b>Game Development:</b> Create engaging games with Unity and other engines.</li>
                    <li><b>Cybersecurity:</b> Learn to protect systems and networks from emerging threats.</li>
                </ul>
            </div>

                <div>
                    <img src={goagif} alt="" id="goa-gif"/>
                </div>
            </div>

    </section>
    <section class="cta">
        <div class="container3">
            <h2 id="green-h2">Get Started Today!</h2>
            <p>Ready to embark on your programming journey? Explore our course catalog, enroll in classes, and start building your future with GOA Academy.</p><br></br>
            <a href="#" class="btn">Sign Up Now</a>
        </div>
    </section>
    <footer>
        <div class="container">
            <p>&copy; 2024 GOA Academy. All rights reserved.</p>
        </div>
    </footer>
        
    </>
    );
}

export default Homes