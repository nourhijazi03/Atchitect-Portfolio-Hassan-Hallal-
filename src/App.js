import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import TTest from "./Pages/TTest";
import Work from "./Pages/Work/Work";
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
      <Route path='/test' exact Component={TTest} />
      </Routes>
      {/* <Home/> */}
      {/* <Skills/> */}
      {/* <TTest/> */}
      {/* <Work/> */}
      </Router>
    </div>
  );
}

export default App;
