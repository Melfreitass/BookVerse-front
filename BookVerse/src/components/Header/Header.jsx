import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header({ idioma, setIdioma}) {

    const textos =  {
        sobre: idioma === "pt" ? "Sobre" : "About",
        biblioteca: idioma === "pt" ? "Biblioteca" : "Library",
        simulado: idioma === "pt" ? "Simulados" : "Quizzes",
        dicas: idioma === "pt" ? "Dicas" : "Tips"
    };

    return (
        <header className={styles.header}>
            <div className={styles.titulo}>
                <NavLink to="/" className={styles.atitulo}>
                    BOOKVERSE
                </NavLink>
            </div>

            <div className={styles.nav}>
                <nav>
                    <NavLink
                        to="/sobre"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        {textos.sobre}
                    </NavLink>

                    <NavLink
                        to="/biblioteca"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        {textos.biblioteca}
                    </NavLink>

                    <NavLink
                        to="/simulados"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        {textos.simulado}
                    </NavLink>

                    <NavLink
                        to="/dicas"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        {textos.dicas}
                    </NavLink>
                </nav>
            </div>

            <div className={styles.language}>
                <button
                    className={idioma === 'pt' ? styles.ativo : styles.desativado}
                    onClick={() => setIdioma('pt')}>
                    PT
                </button>

                <p>|</p>

                <button
                    className={idioma === 'en' ? styles.ativo : styles.desativado}
                    onClick={() => setIdioma('en')}>
                    EN
                </button>
            </div>
        </header>
    );
}

export default Header;
