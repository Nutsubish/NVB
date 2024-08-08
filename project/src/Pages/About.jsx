import { Link } from "react-router-dom";
import vano from "../assets/pfp.jpg"
import nutsubidze from "../assets/nutsubidze.jpg"

const Abouts = () => {
    return(
    <>
        <header>
            <div class="container2">
                <h1>Meet the <span id="creators-span">CREATORS!</span></h1>
            </div>
        </header>
        <main id="main2">
        <section class="about">
            <div>
                <h2>About Us</h2><br></br>
                <p>Welcome to GOA Academy!</p>
                <p>We are Vano Motiashvili and Nikoloz Nutsubidze, the founders of GOA Academy. With a shared passion for technology and a commitment to empowering individuals through education, we embarked on this journey to create a platform that offers top-notch programming courses designed to elevate your skills and accelerate your career.</p><br></br>
                
                <h3>Our Vision</h3>
                <p>At GOA Academy, our vision is simple: to make high-quality programming education accessible to everyone, regardless of their background or experience level. We believe that with the right resources and guidance, anyone can unlock their potential and achieve their goals in the tech industry.</p><br></br>
                
                <h3>Our Mission</h3>
                <p>Our mission is to provide comprehensive, hands-on programming courses that are not only informative but also engaging and practical. We aim to bridge the gap between theoretical knowledge and real-world application, equipping our students with the tools they need to succeed in the ever-evolving tech landscape.</p><br></br>
            </div>
            
            <div id="right-div-about">
                <div class="founder-row">
                    <div class="founder">
                        <img src={vano} alt="Vano Motiashvili" class="founder-photo"/>
                        <div class="founder-info">
                            <h4>Vano Motiashvili</h4>
                            <p>Vano is a software development expert with a strong background in educational technology. His focus on creating impactful learning experiences ensures that GOA Academy's courses meet the highest industry standards.</p>
                        </div>
                    </div>
                    <div class="founder">
                        <img src={nutsubidze} alt="Nikoloz Nutsubidze" class="founder-photo"/>
                        <div class="founder-info">
                            <h4>Nikoloz Nutsubidze</h4>
                            <p>Nikoloz is a passionate educator and programmer. His commitment to clear and engaging teaching methods helps shape the innovative and practical content offered at GOA Academy.</p>
                        </div>
                    </div>
                </div><br></br><br></br>
                
                <h3>What We Offer</h3>
                <p>At GOA Academy, we offer a range of programming courses designed to cater to different skill levels and learning objectives. Whether you're a beginner looking to dive into coding or an experienced developer aiming to expand your expertise, we have something for you. Our courses are crafted to be interactive, hands-on, and tailored to real-world applications.</p><br></br>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 GOA Academy. All rights reserved.</p>
        </div>
    </footer>
    
    </>
    );
}

export default Abouts