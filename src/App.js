import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Portfolio' },
    { name: 'Resume' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <About></About>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Resume></Resume>
        </div>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;