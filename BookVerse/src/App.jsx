import { BrowserRouter, Routes, Route } from "react-router-dom"
import styles from './App.module.css';
import { useState, useEffect } from "react"

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Dicas from './pages/Dicas/Dicas.jsx'
import Home from './pages/Home/Home.jsx'
import Biblioteca from './pages/Biblioteca/Biblioteca.jsx'
import ObraPrincipal from './pages/ObraPrincipal/ObraPrincipal.jsx'
import DetalheLivro from './pages/DetalheLivro/DetalheLivro.jsx'
import Simulados from './pages/Simulados/Simulados.jsx'


function App() {

    const [idioma, setIdioma] = useState(() => {
        return localStorage.getItem("idioma") || "pt";
    });

    useEffect(() => {
        localStorage.setItem("idioma", idioma);
    }, [idioma]);

    return (
        <BrowserRouter>
            <Header idioma={idioma} setIdioma={setIdioma}/>

            <main className={styles.conteudo}>
            <Routes>
                <Route path="/sobre" element={<Sobre idioma={idioma}/>} />
                <Route path="/dicas" element={<Dicas idioma={idioma}/>} />
                <Route path="/" element={<Home idioma={idioma}/>} />
                <Route path="/biblioteca" element={<Biblioteca idioma={idioma}/>} />
                <Route path="/livro/:id" element={<DetalheLivro idioma={idioma} />} />
                <Route path="/obraPrincipal" element={<ObraPrincipal idioma={idioma}/>} />
                <Route path="/simulados" element={<Simulados idioma={idioma}/>} />
            </Routes>
            </main>

            <Footer />

        </BrowserRouter>
    );
}

export default App;
