import { BrowserRouter } from "react-router-dom"

import Header from './components/Header/Header.jsx'
import Dicas from './pages/Dicas/Dicas.jsx';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Dicas />
        </BrowserRouter>
    );
}

export default App;
