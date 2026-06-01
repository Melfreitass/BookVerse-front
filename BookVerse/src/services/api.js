const API_URL = import.meta.env.VITE_API_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

async function realizarRequisicao(endpoint) {
    try {
        const response = await fetch(
            `${API_URL}${endpoint}`,

            {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json',

                    'x-api-key': API_KEY,
                },
            },
        );

        if (response.status === 401 || response.status === 403) {
            throw new Error('Acesso negado: API Key inválida ou expirada.');
        }

        if (!response.ok) {
            throw new Error(
                `Erro na requisição (${response.status}): ${response.statusText}`,
            );
        }

        return await response.json();
    } catch (error) {
        console.error(
            `Erro ao acessar o endpoint ${endpoint}:`,
            error,
        );

        throw error;
    }
}

export async function buscarUsuarios() {
    return await realizarRequisicao('/usuarios');
}

export async function buscarPersonagem() {
    return await realizarRequisicao('/personagem');
}

export async function buscarMembros() {
    return await realizarRequisicao('/membros');
}

export async function buscarSimulados() {
    return await realizarRequisicao('/simulados');
}

export async function buscarLivros() {
    return await realizarRequisicao('/livros');
}

export async function buscarCuriosidades() {
    return await realizarRequisicao('/curiosidades');
}

export async function buscarLivroPorId(id) {
    return await realizarRequisicao(`/integracao/${id}`);
}

export async function buscarBibliotecaIntegrada() {
    return await realizarRequisicao('/integracao');
}
