import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import TTest from "./Pages/TTest";
import Work from "./Pages/Work/Work";
import Threesixty from "./Pages/Three60/Threesixty";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/myWork' exact Component={Work} />
      <Route path='/skills' exact Component={Skills} />
      <Route path='/360' exact Component={Threesixty} />
      <Route path='/contactme' exact Component={Contact} />
      <Route path="/experience" Component={Experience}/>
      <Route path='/test' exact Component={TTest} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
