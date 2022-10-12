import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Education' element={<Education/>} />
    <Route path='/Experience' element={<Experience/>} />
    <Route path='/Project' element={<Project/>} />
    <Route path='/Contact' element={<ContactMe/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
