import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import { BadgeCheck, BookOpenCheck, BrainCog, Dices } from 'lucide-react';
import livroImg from '../../assets/livroPrincipal.png'


const textos = {
    pt: {
        info1: "EDUCAÇÃO LITERÁRIA DE ELITE",
        titulo: "Domine a Literatura do Vestibular",
        descricao:
            "Uma imersão tecnológica nas obras clássicas. Combine a profundidade da leitura tradicional com o poder da análise de dados e simulados inteligentes.",

        verLivro: "Ver Livro",
        verBiblioteca: "Ver Biblioteca",

        card1Titulo: "100% Gabaritado",
        card1Texto:
            "Nossa metodologia garantiu 98% de acerto em literatura no último vestibular.",

        card2Titulo: "Simulados Adaptativos",
        card2Texto:
            "Simulados para treinar seus conhecimentos, com explicação da resposta correta.",

        card3Titulo: "Biblioteca Digital Completa",
        card3Texto:
            "Acesso ilimitado às obras obrigatórias com notas marginais.",

        card4Titulo: "Dicas de Especialistas",
        card4Texto:
            "Vídeo-aulas curtas com os pontos mais cobrados nas provas da FUVEST e UNICAMP."
    },

    en: {
        info1: "ELITE LITERARY EDUCATION",
        titulo: "Master Entrance Exam Literature",
        descricao:
            "A technological immersion into classic literary works. Combine the depth of traditional reading with the power of data analysis and intelligent mock exams.",

        verLivro: "View Book",
        verBiblioteca: "View Library",

        card1Titulo: "100% Success Rate",
        card1Texto:
            "Our methodology achieved a 98% success rate in literature on the latest entrance exams.",

        card2Titulo: "Adaptive Mock Exams",
        card2Texto:
            "Practice exams designed to strengthen your knowledge, including explanations for the correct answers.",

        card3Titulo: "Complete Digital Library",
        card3Texto:
            "Unlimited access to required literary works with detailed annotations.",

        card4Titulo: "Expert Tips",
        card4Texto:
            "Short video lessons covering the topics most frequently tested in FUVEST and UNICAMP exams."
    }
};

function Home({ idioma }) {
    const t = textos[idioma];

    return (
        <home className={styles.home}>
            <section className={styles.inicio}>
                <div className={styles.info}>
                    <div className={styles.texto}>
                        <p className={styles.info1}>{t.info1}</p>
                        <p className={styles.titulo}>{t.titulo}</p>
                        <p className={styles.descricao}>{t.descricao}
                        </p>
                    </div>

                    <div className={styles.botao}>
                        <NavLink
                            to="/obraPrincipal"
                            className={styles.botaoLivro}>
                            {t.verLivro}
                        </NavLink>
                        <NavLink
                            to="/biblioteca"
                            className={styles.botaoBiblioteca}>
                            {t.verBiblioteca}
                        </NavLink>
                    </div>
                </div>

                <div className={styles.foto}>
                    <img src={livroImg} alt="Livro" />
                </div>

                <div className={styles.foto}></div>
            </section>

            <section className={styles.infos}>
                <div  className={`${styles.garantia} ${styles.gabaritado}`}>
                    <div className={styles.iconCircle}>
                        <BadgeCheck className={styles.iconGarantia} />
                    </div>
                    <h2>{t.card1Titulo}</h2>
                    <p>{t.card1Texto}</p>
                </div>

                 <div  className={styles.garantia}>
                    <div className={styles.iconCircle}>
                        <BrainCog className={styles.iconGarantia} />
                    </div>
                    <h2>{t.card2Titulo}</h2>
                    <p>{t.card2Texto}</p>
                </div>

                <div  className={`${styles.garantia} ${styles.biblioteca}`}>
                    <div className={styles.iconCircle}>
                        <BookOpenCheck className={styles.iconGarantia} />
                    </div>
                    <h2>{t.card3Titulo}</h2>
                    <p>{t.card3Texto}</p>
                </div>

                <div  className={styles.garantia}>
                    <div className={styles.iconCircle}>
                        <Dices className={styles.iconGarantia} />
                    </div>
                    <h2>{t.card4Titulo}</h2>
                    <p>{t.card4Texto}</p>
                </div>
            </section>
        </home>
    );
}

export default Home;
