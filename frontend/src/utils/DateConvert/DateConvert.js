/**
 * Função responsável por converter uma data do formato DD/MM/YYYY para o formato YYYY-MM-DD.
 * @param {string} date - Data no formato DD/MM/YYYY.
 * @returns {string} - Data convertida para o formato YYYY-MM-DD.
 */
import moment from 'moment';

function DateConvert(date) {
  // Converte a data para um objeto Moment.js
  const dataMoment = moment(date, 'DD/MM/YYYY');
  
  // Formata a data Moment.js para o formato YYYY-MM-DD
  const dataISO = dataMoment.format('YYYY-MM-DD');
  
  // Retorna a data no formato ISO
  return dataISO;
}

export default DateConvert;
