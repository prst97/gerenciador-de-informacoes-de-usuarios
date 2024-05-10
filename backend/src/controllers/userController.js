/**
 * Importa o modelo de usuário para realizar operações no banco de dados.
 */
import { user } from "../models/User.js";

/**
 * Classe que contém métodos para lidar com requisições relacionadas a usuários.
 */
class userController {

    /**
     * Método assíncrono para obter todos os usuários.
     */
    static async getUser(req, res) {
        try {
            // Busca todos os usuários no banco de dados
            const foundUser = await user.find({});
            // Verifica se algum usuário foi encontrado
            if (!foundUser) {
                // Retorna um erro 404 caso nenhum usuário seja encontrado
                res.status(404).json({ message: 'Usuário não encontrado' });
            } else {
                // Retorna os usuários encontrados
                res.status(200).json({ user: foundUser });
            }
        } catch (error) {
            // Retorna um erro 500 caso ocorra algum erro ao buscar os usuários
            res.status(500).json({
                message: `${error.message} - erro ao obter o nome do usuário`
            });
        }
    }

    /**
     * Método assíncrono para obter um usuário pelo ID.
     */
    static async getUserById(req, res) {
        try{
            // Obtém o ID do usuário a partir dos parâmetros da requisição
            const id = req.params.id
            // Busca o usuário no banco de dados pelo ID
            const foundUser = await user.findById(id);
            // Retorna o usuário encontrado
            res.status(200).json(foundUser);
        } catch (error) {
            // Retorna um erro 500 caso ocorra algum erro ao buscar o usuário
            res.status(500).json({
                message: `${error.message} - error finding user id`
            });
        };
    }

    /**
     * Método assíncrono para registrar um novo usuário.
     */
    static async postUser (req, res) {
        try{
            // Cria um novo usuário com base nos dados da requisição
            const newUser = await user.create(req.body);
            // Retorna uma mensagem de sucesso e o novo usuário criado
            res.status(201).json({
                message: "user registered successfully",
                user: newUser
            });
        } catch (error) {
            // Retorna um erro 500 caso ocorra algum erro ao registrar o usuário
            res.status(500).json({
                message: `${error.message} - failure to register new user`
            });
        };
    };

    /**
     * Método assíncrono para atualizar um usuário existente pelo ID.
     */
    static async updateUser(req, res) {
        try{
            // Obtém o ID do usuário a partir dos parâmetros da requisição
            const id = req.params.id
            // Atualiza o usuário no banco de dados com base nos dados da requisição
            await user.findByIdAndUpdate(id, req.body);
            // Retorna uma mensagem de sucesso
            res.status(200).json({message: "user updated"});
        } catch (error) {
            // Retorna um erro 500 caso ocorra algum erro ao atualizar o usuário
            res.status(500).json({
                message: `${error.message} - error updating user`
            });
        };
    }
};

export default userController;
