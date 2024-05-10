/**
 * Importa o framework Express, o módulo de conexão com o banco de dados e as rotas definidas.
 */
import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Estabelece a conexão com o banco de dados
const connection = await connectToDatabase();

// Manipulador de eventos para erros de conexão
connection.on("error", (error) => {
    console.error("Connection error: ", error);
})

// Manipulador de eventos para quando a conexão for aberta
connection.once("open", () => {
    console.log("connection established with the database");
})

// Inicializa o aplicativo Express
const app = express();

// Configuração para permitir CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Cabeçalhos permitidos
    next();
});

// Registra as rotas no aplicativo Express
routes(app);

// Exporta o aplicativo Express configurado com as rotas
export default app;
