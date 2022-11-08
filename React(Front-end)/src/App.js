import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import Sales from './pages/sales';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Support from './pages/support';

function App() {
return (
	<Router>
	  <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/Sales' element={<Sales />} />
      <Route path='/Team' element={<Teams />} />
      <Route path='/Blogs' element={<Blogs />} />
      <Route path='/Support' element={<Support />} />
    </Routes>
	</Router>
);
}

export default App;
