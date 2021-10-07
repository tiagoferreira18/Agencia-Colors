/* 
Fazer uma tela peguntando a data de nascimento do usuário. Se ele for maior, vai pro index.html, caso contrário, recebe uma mensagem dizendo que o site é para maiores de 18 anos.

 */


let nasc = Number (prompt('Qual sua data de nascimento'))
console.log(typeof idade);

/* data e hora atual */
now = new Date;
console.log(now);

ano = now.getFullYear()

idade = ano - nasc

console.log(idade);


if (idade < 18){
  alert("Infelizmente sua idade não permite acesso ao nosso conteúdo")
  window.location.href = "https://www.google.com.br/";
}

