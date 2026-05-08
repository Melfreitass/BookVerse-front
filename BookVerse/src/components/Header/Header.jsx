import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
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
                        Sobre
                    </NavLink>

                    <NavLink
                        to="/biblioteca"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        Biblioteca
                    </NavLink>

                    <NavLink
                        to="/simulados"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        Simulados
                    </NavLink>

                    <NavLink
                        to="/dicas"
                        className={({ isActive }) =>
                            isActive ? `${styles.anav} ${styles.active}` : styles.anav
                        }>
                        Dicas
                    </NavLink>
                </nav>
            </div>

            <div className={styles.language}>
                <p>PT | EN</p>
            </div>
        </header>
    );
}

export default Header;
