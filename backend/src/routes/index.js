/**
 * Importa o framework Express e as rotas de usuário.
 */
import express from "express";
import user from "./userRoutes.js";

/**
 * Configura as rotas da aplicação.
 * @param {Object} app - Objeto da aplicação Express.
 */
const routes = (app) => {
    // Rota inicial para verificar o status da aplicação
    app.route("/").get((req, res) => res.status(200).send("Usuário em /user"));
    
    // Utiliza o middleware para análise de corpo da requisição em formato JSON
    // e monta as rotas de usuário
    app.use(express.json(), user);
};

// Exporta as configurações de rotas
export default routes;