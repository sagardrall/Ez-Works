import React from 'react';
import './App.css';
import Services from './components/Services';           
import ContactForm from './components/ContactForm';
import ezlogo from './Assets/Images/ezlogo.png'

function App() {
  return (
    <div className="App">
      <header>
      {/* <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={ezlogo} alt='ez logo' role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/> */}
        
         <img src={ezlogo} alt="EZ Works Logo" />
        <h1>Suite Of Business Support Services</h1>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
        <Services />
        <ContactForm />
      </main>
    </div>
  );
} 

export default App;

