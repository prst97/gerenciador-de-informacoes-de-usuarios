/**
 * Importa a biblioteca mongoose para interagir com o MongoDB.
 */
import mongoose from "mongoose";

/**
 * Função assíncrona para conectar ao banco de dados MongoDB.
 * Retorna a conexão com o banco de dados.
 */
async function connectToDatabase() {
    // Conecta ao banco de dados usando a string de conexão definida nas variáveis de ambiente
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    // Retorna a conexão com o banco de dados
    return mongoose.connection;
}

export default connectToDatabase;
