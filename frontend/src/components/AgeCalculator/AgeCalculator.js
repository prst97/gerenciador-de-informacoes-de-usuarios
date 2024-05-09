import moment from "moment";

function AgeCalculator(date ) {
    const dateInput = new Date(date); // Formato YYYY-MM-DD
    dateInput.setDate(dateInput.getDate() + 1); // Adiciona 1 dia corretamente
    const isValidDate = moment(dateInput, 'YYYY-MM-DD', true).isValid();
  
    if (isValidDate) {
        const birthDate = moment(dateInput);
        const today = moment();
        const age = today.diff(birthDate, 'years');
        return age;
    } else {
      console.log('Data inválida.');
    }
}

export default AgeCalculator;


  