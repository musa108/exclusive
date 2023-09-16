import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default App
