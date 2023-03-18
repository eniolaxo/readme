import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Quotes from './pages/Quotes';

import About from './pages/About';
// import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/quotes" element={<Quotes/>} /> */}
            {/* <Route path="/search" element={<Search/>} /> */}
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

