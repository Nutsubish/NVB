// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Lesson1Task2 = () =>{
//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     return(
//         <>
//             <div id="main-body-div">
//             <div id="main-lesson-div">
//                     <p id="lesson1-p">Task No.2</p>
//                     <div id="back-menu">
//                     <Link to={"/Courses"}>
//                         <button id="back-btn">X Back to Menu</button>
//                     </Link>
//                     </div>

//                     <div id="test-div">
//                         <p className="output-p">what is output of this code</p>
//                         <p className="output-p">print("Hello World")</p><br></br>
//                         <input type="text" id="lesson2-input" value={inputValue} onChange={handleInputChange}/>
//                     </div>
//                 </div>
//                     <Link to={"/Courses/p3"}>
//                         <button id="next2-btn" disabled={inputValue != '"' || inputValue2 != '"'}>Next Task</button>
//                         <Link to={"/Courses/p1"}>
//                         <button id="prev-btn">Previous Task</button>
//                         </Link>
//                     </Link>
//         </div>
//         </>
//     );
// }

// export default Lesson1Task2




import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson1Task2 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const isButtonDisabled = inputValue !== 'Hello World';

    return (
        <>
            <div id="main-body-div">
                <div id="main-lesson-div">
                    <p id="lesson1-p">Task No.2</p>
                    <div id="back-menu">
                        <Link to={"/Courses"}>
                            <button id="back-btn">X Back to Menu</button>
                        </Link>
                    </div>

                    <div id="test-div">
                        <p className="output-p">What is the output of this code?</p>
                        <p className="output-p">print("Hello World")</p><br />
                        <input 
                            type="text" 
                            id="lesson2-input" 
                            value={inputValue} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div id="navigation-buttons">
                        <Link to={"/Courses/p1"}>
                            <button id="prev-btn">Previous Task</button>
                        </Link>
                        <Link to={"/Courses/p5"}>
                            <button id="next2-btn" disabled={isButtonDisabled}>Next Task</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lesson1Task2;
