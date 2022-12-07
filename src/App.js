import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Gallery from './pages/Gallery';


function App() {
  return (
    <div>
        <Navbar/>
          <div>
              <Routes>
                  <Route path = "/" element = {<Home/>}/>
                  <Route path = "/gallery" element = {<Gallery/>}/>
                  <Route path = "/register" element = {<Register/>}/>
                  <Route path = "/login" element = {<Login/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>
      
  );
}

export default App;
