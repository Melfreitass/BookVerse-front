import styles from './Biblioteca.module.css';
import { Link } from 'react-router-dom';

function Biblioteca() {
    const livros = [
        {
            id: 1,
            titulo: 'Vidas Secas',
            autor: 'Graciliano Ramos',
            genero_pt: 'Romance Regionalista',
            genero_en: 'Regionalist Novel',
            ano: 1938,
            movimento_pt: 'Modernismo',
            movimento_en: 'Modernism',
            descricao_pt:
                'A obra retrata a dura realidade de uma família nordestina marcada pela seca e pela miséria.',
            descricao_en:
                'The novel portrays the harsh reality of a northeastern Brazilian family facing drought and poverty.',
            capa_url: '/capas/vidasSecas.png',
            destaque: true,
        },

        {
            id: 2,
            titulo: 'Capitães da Areia',
            autor: 'Jorge Amado',
            genero_pt: 'Romance Social',
            genero_en: 'Social Novel',
            ano: 1937,
            movimento_pt: 'Modernismo',
            movimento_en: 'Modernism',
            descricao_pt:
                'A narrativa acompanha um grupo de menores abandonados nas ruas de Salvador.',
            descricao_en:
                'The story follows a group of abandoned children surviving on the streets of Salvador.',
            capa_url: '/capas/capitaesDaAreia.png',
            destaque: false,
        },

        {
            id: 3,
            titulo: 'Memórias Póstumas de Brás Cubas',
            autor: 'Machado de Assis',
            genero_pt: 'Romance',
            genero_en: 'Novel',
            ano: 1881,
            movimento_pt: 'Realismo',
            movimento_en: 'Realism',
            descricao_pt:
                'Narrado por um defunto autor, o livro ironiza a sociedade brasileira do século XIX.',
            descricao_en:
                'Narrated by a deceased author, the book satirizes 19th century Brazilian society.',
            capa_url: '/capas/brasCubas.png',
            destaque: true,
        },

        {
            id: 4,
            titulo: 'Iracema',
            autor: 'José de Alencar',
            genero_pt: 'Romance Indianista',
            genero_en: 'Indianist Novel',
            ano: 1865,
            movimento_pt: 'Romantismo',
            movimento_en: 'Romanticism',
            descricao_pt:
                'A obra simboliza a formação do povo brasileiro através do romance entre Iracema e Martim.',
            descricao_en:
                'The novel symbolizes the formation of the Brazilian people through the romance between Iracema and Martim.',
            capa_url: '/capas/iracema.png',
            destaque: false,
        },

        {
            id: 5,
            titulo: 'O Cortiço',
            autor: 'Aluísio Azevedo',
            genero_pt: 'Romance Naturalista',
            genero_en: 'Naturalist Novel',
            ano: 1890,
            movimento_pt: 'Naturalismo',
            movimento_en: 'Naturalism',
            descricao_pt:
                'Retrata a vida coletiva em um cortiço carioca e as influências do meio sobre o indivíduo.',
            descricao_en:
                'It portrays collective life in a Rio de Janeiro tenement and the influence of the environment on individuals.',
            capa_url: '/capas/oCortico.png',
            destaque: false,
        },

        {
            id: 6,
            titulo: 'A Hora da Estrela',
            autor: 'Clarice Lispector',
            genero_pt: 'Romance Psicológico',
            genero_en: 'Psychological Novel',
            ano: 1977,
            movimento_pt: 'Pós-Modernismo',
            movimento_en: 'Postmodernism',
            descricao_pt:
                'A trajetória de Macabéa revela invisibilidade social e existencialismo.',
            descricao_en:
                "Macabéa's journey reveals social invisibility and existentialism.",
            capa_url: '/capas/horaDaEstrela.png',
            destaque: true,
        },
    ];

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.topo}>
                    <div className={styles.filtros}>
                        <div className={styles.filtro}>
                            <span>AUTOR</span>

                            <button>Todos os Autores</button>
                        </div>

                      
                    </div>

                    <div className={styles.banner}>
                        <h2>
                            Explore as obras mais relevantes da literatura
                            acadêmica e clássica.
                        </h2>
                    </div>
                </section>

                <section className={styles.gridLivros}>
                    {livros.map((livro) => (
                        <Link
                            to={`/livro/${livro.id}`}
                            key={livro.id}
                            className={styles.linkCard}>
                            <div className={styles.cardLivro}>
                                <div className={styles.imagemContainer}>
                                    <img
                                        src={livro.capa_url}
                                        alt={livro.titulo}
                                        className={styles.imagemLivro}
                                    />
                                </div>

                                <div className={styles.cardConteudo}>
                                    <h3>{livro.titulo}</h3>

                                    <p>{livro.autor}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Biblioteca;