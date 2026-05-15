import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useState } from "react"

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Dicas from './pages/Dicas/Dicas.jsx'
import Home from './pages/Home/Home.jsx'
import Biblioteca from './pages/Biblioteca/Biblioteca.jsx'
import ObraPrincipal from './pages/ObraPrincipal/ObraPrincipal.jsx'


function App() {

    const [idioma, setIdioma] = useState("pt")

    return (
        <BrowserRouter>
            <Header idioma={idioma} setIdioma={setIdioma}/>

            <Routes>
                <Route path="/sobre" element={<Sobre idioma={idioma}/>} />
                <Route path="/dicas" element={<Dicas idioma={idioma}/>} />
                <Route path="/" element={<Home idioma={idioma}/>} />
                <Route path="/Biblioteca" element={<Biblioteca idioma={idioma}/>} />
                <Route path="/obraPrincipal" element={<ObraPrincipal idioma={idioma}/>} />
            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;
