/**
 * Importa o framework Express e o controlador de usuário.
 */
import express from "express";
import userController from "../controllers/userController.js";

// Cria um objeto de roteador do Express
const routes = express.Router();

// Define as rotas para manipulação de usuários

// Rota para obter todos os usuários
routes.get("/user", userController.getUser);

// Rota para obter um usuário por ID
routes.get("/user/:id", userController.getUserById);

// Rota para criar um novo usuário
routes.post("/user", userController.postUser);

// Rota para atualizar um usuário existente
routes.put("/user/:id", userController.updateUser);

// Exporta as rotas configuradas para manipulação de usuários
export default routes;
