import styles from './Cards.module.css';
import { useEffect, useState } from 'react';
import { buscarMembros } from '../../services/api';

function Cards() {
    const [membros, setMembros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarMembros() {
            try {
                const dados = await buscarMembros();

                setMembros(dados);
            } catch (error) {
                console.error('Erro ao carregar membros:', error);
            } finally {
                setLoading(false);
            }
        }

        carregarMembros();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Carregando membros...</p>;
    }

    return (
        <section className={styles.grid}>
            {membros.map((membro) => (
                <div key={membro.id} className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <img
                            src={membro.fotoURL}
                            alt={membro.nome}
                            className={styles.imagem}
                        />
                    </div>

                    <div className={styles.conteudo}>
                        <h3 className={styles.nome}>
                            {membro.nome}
                        </h3>

                        <p className={styles.objetivo}>
                            {membro.objetivo}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Cards;