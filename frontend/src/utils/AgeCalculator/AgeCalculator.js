/**
 * Função responsável por calcular a idade com base na data de nascimento fornecida.
 * @param {string} date - Data de nascimento no formato YYYY-MM-DD.
 * @returns {number} - Idade calculada a partir da data de nascimento.
 */
import moment from "moment";

function AgeCalculator(date) {
    // Converte a data para um objeto Date
    const dateInput = new Date(date); // Formato YYYY-MM-DD
  
    // Adiciona 1 dia para correção
    dateInput.setDate(dateInput.getDate() + 1); 
  
    // Verifica se a data é válida usando Moment.js
    const isValidDate = moment(dateInput, 'YYYY-MM-DD', true).isValid();
  
    if (isValidDate) {
        // Calcula a idade com base na data de nascimento e na data atual
        const birthDate = moment(dateInput);
        const today = moment();
        const age = today.diff(birthDate, 'years');
        return age;
    } else {
        // Se a data fornecida for inválida, registra um aviso no console
      console.log('Data inválida.');
    }
}

export default AgeCalculator;
