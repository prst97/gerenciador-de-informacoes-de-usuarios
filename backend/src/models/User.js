/**
 * Importa o mongoose para criar o esquema e o modelo de usuário.
 */
import mongoose from "mongoose";

/**
 * Define o esquema do usuário com os campos necessários.
 */
const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    idade: { type: Number },
    dataDeNascimento: { type: String },
    rua: { type: String },
    bairro: { type: String },
    numero: { type: Number },
    complemento: { type: String },
    cidade: { type: String },
    estado: { type: String },
    biografia: { type: String },
    avatar: { data: Buffer, contentType: String }
}, { versionKey: false });

/**
 * Cria o modelo de usuário com base no esquema definido.
 */
const user = mongoose.model("usuarios", userSchema);

// Exporta o modelo de usuário e o esquema
export { user, userSchema };
