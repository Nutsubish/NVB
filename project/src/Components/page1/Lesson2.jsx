import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson1Task2 = () =>{
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return(
        <>
            <h1>Hello This is Lesson1 Task2</h1>
            <p>what is output of this code</p>
            <p>print("Hello World")</p>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <br/>
            <Link to={"/Courses/p5"}>
                <button disabled={inputValue !== 'Hello World'}>Next Task</button>
            </Link>
            <Link to={"/Courses/p1"}>
                <button>Previous Task</button>
            </Link>
        </>
    );
}

export default Lesson1Task2