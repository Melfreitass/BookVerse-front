import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Header/Header.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Dicas from './pages/Dicas/Dicas.jsx'
import Home from './pages/Home/Home.jsx'


function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/dicas" element={<Dicas/>} />
                <Route path="/" element={<Home/>} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
