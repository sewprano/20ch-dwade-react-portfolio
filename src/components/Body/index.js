import { Routes, Route, useLocation } from 'react-router-dom';

//import components
import Portfolio from '../../pages/Portfolio.js';
import About from '../../pages/About.js';
import Contact from '../../pages/Contact.js';
import Resume from '../../pages/Resume.js';

const Body = () => {
    return (
        <body>
            <Routes>
                <Route path={'/'} 
                element={<About />}
                />
                <Route path={'portfolio'}
                element={<Portfolio />}
                />
                <Route path={'contact'}
                element={<Contact />}
                />
                <Route path={'resume'}
                element={<Resume />}
                />
            </Routes>
        </body>
    )
}
export default Body;
