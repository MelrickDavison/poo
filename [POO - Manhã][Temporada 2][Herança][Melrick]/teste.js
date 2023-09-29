let professor1 = new Professor('Alok', '111.222.333-44', '17/02/1994', '123', 'graduação');
let professor2 = new Professor('Clecinho do Arrocha', '222.333.444-55', '15/02/1994', '321', 'doutorado');
let alune1 = new Alune('Kemylly', "333.333.333-54", '15/07/2006', '321');
let alune2 = new Alune('Melrick', "444.444.444-44", '04/09/2006', '123');
let alune3 = new Alune('Gabriel', '555.555.555-55', '20/04/2006', '231');

let rogadx = new EventoAcademico('');

rogadx.cadastrarParticipante(professor1);
rogadx.cadastrarParticipante(professor2);
rogadx.cadastrarParticipante(alune1);
rogadx.cadastrarParticipante(alune2);
rogadx.cadastrarParticipante(alune3);

console.log(rogadx);