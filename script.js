const chilometri = parseInt(prompt('Inserire numero chilometri da percorrere'))
const eta = prompt('Inserire età del viaggiatore')
const prezzomin = 0.21

const valuta = 'Euro';

let totale = (chilometri * prezzomin);
console.log(totale + ' ' + valuta);
const maggioreta = 18;
const over = 65;