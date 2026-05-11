import styles from './Footer.module.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>BOOKVERSE</h2>

            <div className={styles.redes}>

                <div className={styles.social}>
                <FaFacebookF className={styles.icon} />
                <p>FACEBOOK</p>
                </div>

                <div className={styles.social}>
                <FaInstagram className={styles.icon} />
                <p>INSTAGRAM</p>
                </div>

                <div className={styles.social}>
                <FaLinkedinIn className={styles.icon} />
                <p>LINKEDIN</p>
                </div>
            </div>

            <p className={styles.copy}>
                 © SESI | SENAI 2026
            </p>
        </footer>
    );
}

export default Footer;
