//import components:
import Header from './components/Header';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';

//import router
import {BrowserRouter as Router,} from 'react-router-dom';
 
const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Navigation />
      <Body />
      <Footer />
    </Router>
    </>
  )
}
export default App;
