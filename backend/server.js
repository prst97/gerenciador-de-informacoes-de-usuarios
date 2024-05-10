/**
 * Importa e configura as variáveis de ambiente do arquivo .env.
 * Em seguida, importa o aplicativo express definido em src/app.js.
 */
import "dotenv/config";
import app from "./src/app.js"; 

// Define a porta do servidor como 3000 ou 3001, se não estiver definida nas variáveis de ambiente
const PORT = 3000 || 3001;

// Inicia o servidor na porta especificada e imprime uma mensagem no console quando estiver ouvindo
app.listen(PORT, () => {
    console.log("server listening!")
});
