import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.titulo}>
                <p>BOOKVERSE</p>
            </div>

            <div className={styles.nav}>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/biblioteca">Biblioteca</Link>
                    <Link to="/simulados">Simulados</Link>
                    <Link to="/videos">Videos</Link>
                </nav>
            </div>

            <div className={styles.language}>
                <p>PT | EN</p>
            </div>
        </header>
    );
}

export default Header;
