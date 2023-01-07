//import components:
import Header from './components/Header';
import Footer from './components/Footer';

//import pages:
import Portfolio from './pages/Portfolio.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';
import { useState } from 'react';

 
function App(){
  const [displayedPage, setDisplayedPage] = useState('about');

  const renderPage = () => {
    if (displayedPage === 'about') return <About />;
    if (displayedPage === 'portfolio') return <Portfolio />;
    if (displayedPage === 'contact') return <Contact />;
    if (displayedPage === 'resume') return <Resume />;
  }

  const changePage = (page) => setDisplayedPage(page);

  return (
    <>
     <Header displayedPage={displayedPage} changePage={changePage}/>
    {renderPage()}
     <Footer />
    </>
  )
}

export default App;


// return (
  //   <>
  //   <Router>
  //     <Header />
  //     {/* <Navigation /> */}
  //     <Routes>
  //       <Route path={'/'} 
  //       element={<About />}
  //       />
  //       <Route path={'portfolio'}
  //       element={<Portfolio />}
  //       />
  //       <Route path={'contact'}
  //       element={<Contact />}
  //       />
  //       <Route path={'resume'}
  //       element={<Resume />}
  //       />
  //     </Routes>
  //     <Footer />
  //   </Router>
  //   </>
  // )