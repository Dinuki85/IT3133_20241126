import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
    <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home">About</Link></li>
          <li><Link to="/home">ContactUs</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/dash' element={<Dashboard/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
