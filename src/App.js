import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Form from './components/Form';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/about" element={<About />}></Route> 
        </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
