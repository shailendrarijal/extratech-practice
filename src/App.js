import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Practice from './pages/Practice/Practice';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
      
        <div className="App">
            <ThemeProvider>
                <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/practice" element={<Practice />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>

        </div>
  );
}

export default App;
