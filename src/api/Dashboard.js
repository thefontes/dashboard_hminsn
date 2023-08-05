export const obterInternacoes = async () => {
    try {
        const response = await fetch('http://localhost:3002/internacoes');
        return await response.json();
    } catch (error) {
        console.error('Erro ao obter dados da api:', error);
        return []
    }
};

export const obterPartos = async () => {
    try {
        const response = await fetch('http://localhost:3002/tipodeparto');
        return await response.json();
    } catch (error) {
        console.error('Erro ao obter dados da api:', error);
        return []
    }
};
export const obterReadmissoes = async () => {
    try {
        const response = await fetch('http://localhost:3002/readmissoes');
        return await response.json();
    } catch (error) {
        console.error('Erro ao obter dados da api:', error);
        return []
    }
};

export const obterComplicacoes = async () => {
    try {
        const response = await fetch('http://localhost:3002/complicacoes');
        return await response.json();
    } catch (error) {
        console.error('Erro ao obter dados da api:', error);
        return []
    }
};

export const obterCesarianas = async () => {
    try {
        const response = await fetch('http://localhost:3002/cesarianas');
        return await response.json();
    } catch (error) {
        console.error('Erro ao obter dados da api:', error);
        return []
    }
};
