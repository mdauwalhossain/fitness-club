import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      

      <Home></Home>
      <AboutUs></AboutUs>
      <Services></Services>
      <ContactUs></ContactUs>
      <NotFound></NotFound>

    </div>
  );
}

export default App;
