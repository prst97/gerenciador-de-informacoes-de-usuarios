/**
 * Função responsável por formatar uma data no formato YYYY-MM-DD para DD/MM/YYYY.
 * @param {string} date - Data no formato YYYY-MM-DD.
 * @returns {string} - Data formatada no formato DD/MM/YYYY.
 */
const moment = require('moment');

function DateFormat(date) {
  // Converte a string de data para o tipo Date
  const dateInput = new Date(date);

  // Adiciona 1 dia à data para correção
  dateInput.setDate(dateInput.getDate() + 1);

  // Verifica se a data é válida usando a biblioteca Moment.js
  const isValidDate = moment(dateInput, 'YYYY-MM-DD', true).isValid();

  // Se a data for válida, formata-a para o formato DD/MM/YYYY
  if (isValidDate) {
    const formattedDate = moment(dateInput).format('DD/MM/YYYY');
    return formattedDate;
  } else {
    // Se a data não for válida, exibe uma mensagem de erro no console
    console.log('Data inválida.');
  }
}

export default DateFormat;
