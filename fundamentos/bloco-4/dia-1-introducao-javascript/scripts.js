let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

console.log(typeof patientAge);
// patientAge não foi declarada, logo ela aparece como undefined.

patientId = '50';
console.log(typeof patientId);
// quando entre aspas, a idade do paciente se torna uma variável do tipo string.
