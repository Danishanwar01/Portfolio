import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Introduction from './components/Introduction';
import Background from './components/Background';
import Projects from './components/Projects';
import Projectsgallery from './components/Projectsgallery';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';









const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/introduction' element={<Introduction/>}/>
        <Route path='/background' element={<Background/>}/>
        {/* <Route path='/projects' element={<Projects/>}/> */}
        <Route path='/projects-gallery' element={<Projectsgallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/social-media' element={<SocialMedia/>}/> */}
      </Routes>
      
    </Router>
  );
};

export default App;