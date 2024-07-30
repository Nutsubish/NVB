import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from "./Pages/Homes.jsx";
import Courses from "./Pages/Courses.jsx";
import Abouts from "./Pages/About.jsx";
import Layouts from "./Pages/Layout.jsx";
import Ex2 from "./Components/page2/Lesson1.jsx";
import Ex1 from "./Components/page1/Lesson1.jsx";
import Lesson1Task2 from "./Components/page1/Lesson2.jsx";
import Lesson2Task2 from "./Components/page2/Lesson2.jsx";
import Lesson1Task3 from "./Components/page1/Lesson3.jsx";
import Lesson2Task3 from "./Components/page2/Lesson3.jsx";
import Signup from "./Pages/SignUp.jsx";

const Main = () => {

    return (
      <>
      <Router>
          <Routes>
            <Route element={<Layouts/>}>
                <Route path="/" element={<Homes/>}/>
                <Route path="/Courses" element={<Courses/>}/>
                <Route path="/Abouts" element={<Abouts/>}/>
                <Route path="/Courses/p1" element={<Ex1/>}/>
                <Route path="/Courses/p2" element={<Ex2/>}/>
                <Route path="/Courses/p3" element={<Lesson1Task2/>}/>
                <Route path="/Courses/p4" element={<Lesson2Task2/>}/>
                <Route path="/Courses/p5" element={<Lesson1Task3/>} />
                <Route path="/Courses/p6" element={<Lesson2Task3/>} />
                <Route path="/SignUp" element={<Signup/>}/>
            </Route>
          </Routes>
        </Router>
      </>
      
    )
  }
  
  export default Main
  