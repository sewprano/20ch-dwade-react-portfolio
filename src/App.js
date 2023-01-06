//import components:
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//import router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Navigation />
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
      <Footer />
    </Router>
    </>
  )
}
export default App;
