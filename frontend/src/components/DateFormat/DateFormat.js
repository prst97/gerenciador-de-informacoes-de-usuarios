const moment = require('moment');

function DateFormat(date) {
  const dateInput = new Date(date); // Formato YYYY-MM-DD
  dateInput.setDate(dateInput.getDate() + 1); // Adiciona 1 dia corretamente

  const isValidDate = moment(dateInput, 'YYYY-MM-DD', true).isValid();

  if (isValidDate) {
    const formattedDate = moment(dateInput).format('DD/MM/YYYY');
    return formattedDate;
  } else {
    console.log('Data inválida.');
  }
}

export default DateFormat;
