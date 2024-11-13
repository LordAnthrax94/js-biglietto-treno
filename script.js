const chilometri = parseInt(prompt('Inserire numero chilometri da percorrere'))
const eta = prompt('Inserire età del viaggiatore')
const prezzomin = 0.21

const valuta = 'Euro';

let totale = (chilometri * prezzomin);
console.log(totale + ' ' + valuta);
const maggioreta = 18;
const over = 65;

let scontoMin = (totale * 20) / 100
let scontoOver = (totale * 40) / 100

let prezzoscontMin = totale - scontoMin 
let prezzoscontOver = totale - scontoOver 

if(eta < maggioreta){
  
console.log(prezzoscontMin + ' ' + valuta);

} else if(eta > over){

  console.log(prezzoscontOver + ' ' + valuta);

} 
  

  
 

 