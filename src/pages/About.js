import dwade from '../assets/DeborahWorkSm.jpg';

function About() {
    return (
        <div className='aboutMain'>
            <img src={dwade} alt="Deborah Wade" height={400} />
            <p>Deborah has studied web development and design for the last 3 years. 
                She has taken classes in Coding (C++, JavaScript, Java, and Swift), 
                DevOps, Networks, Object Oriented Programming, and UX/UI. 
                She is currently finishing a web development bootcamp with the University of Washington.
                <br />Areas of study include; HTML, CSS, JavaScript, APIs, MERN, SQL, React, & GraphQL
                In addition she has also taken classes in Art, Graphic design, online 
                communication and typography.</p>
        </div>
    )
}

export default About;