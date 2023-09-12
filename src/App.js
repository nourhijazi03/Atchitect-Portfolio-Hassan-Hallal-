import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
    </div>
  );
}

export default App;
