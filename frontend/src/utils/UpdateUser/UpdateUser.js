// Importação do módulo axios para realizar requisições HTTP
import axios from 'axios';

// Função assíncrona para obter os dados do usuário
const getUserData = async () => {
    try {
        // Realiza uma requisição GET para obter os dados do usuário a partir da URL especificada
        const response = await axios.get('http://localhost:3000/user');
        // Retorna os dados do usuário contidos na resposta da requisição
        return response.data.user;
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de erro no console e retorna um array vazio
        console.error('Erro ao obter dados do usuário:', error.message);
        return [];
    }
};

// Função assíncrona para atualizar os dados do usuário
const updateUser = async (userId, userData, setUser) => {
    // Obtém os dados do usuário
    const data = await getUserData();
    // Verifica se há dados do usuário
    if (data.length > 0) {
        // Se houver dados, realiza uma requisição PUT para atualizar os dados do usuário com o ID especificado
        await axios.put(`http://localhost:3000/user/${userId}`, userData);
        // Exibe uma mensagem de sucesso no console
        console.log('Usuário atualizado com sucesso!');
    } else {
        // Se não houver dados, realiza uma requisição POST para criar um novo usuário com os dados fornecidos
        await axios.post('http://localhost:3000/user', userData);
        // Obtém os dados atualizados do usuário
        const updatedData = await getUserData();
        // Atualiza o estado do usuário com os novos dados
        await setUser(updatedData[0]);
        // Exibe uma mensagem de sucesso no console
        console.log('Usuário criado com sucesso!');
    }
};

export default updateUser;