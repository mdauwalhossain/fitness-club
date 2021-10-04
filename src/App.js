import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header></Header>

        <Switch>          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home>Home</Home>           
          </Route>
          <Route path="/about">
            <AboutUs>About Us</AboutUs>
          </Route>
          <Route path="/services">
            <Services>Our Services</Services>
          </Route>
          <Route path="/contact">
            <ContactUs>Contact Us</ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        
        <Footer></Footer>
      </Router>  
     

    </div>
  );
}

export default App;
