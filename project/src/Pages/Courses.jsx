import ForCourse from "../Components/ForCourse.jsx";
import PythonLogo from "../assets/Python-Emblem.png"

const Courses= () => {
    return(
        <>
            <div id="main-introduction-div">
                <img src={PythonLogo} alt="" id="python-logo" />
            <div id="introduction-div">
                <p id="introduction-p">Introduction to Python</p>
            <p id="python-desc">Python is a popular, easy-to-learn, and very powerful programming language, which is used in software and web development, data science, machine learning, and many other fields. In this course, we’ll cover the basic concepts of Python, as well as build real-life projects and solve different coding challenges. Python for Beginners requires no prior programming experience, so let’s dive right in!</p>
            <div id="green-bar"></div>
            </div>
        </div>
            <ForCourse/>
        </>
    );
}

export default Courses