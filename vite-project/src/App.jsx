import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Sobre } from './components/Sobre/Sobre';
import { Servicos } from './components/Servicos/Servicos';
import { Contato } from './components/Contato/Contato';
import './Styles.global.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Header setActiveSection={setActiveSection} />
      <main className="main-content">
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <Sobre />}
        {activeSection === 'services' && <Servicos />}
        {activeSection === 'contact' && <Contato />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
