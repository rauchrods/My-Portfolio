import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
