/* Uma barra de acessibilidade para fontes (3 botões onde: 1 diminui a letra, o segundo resta, o 3 aumenta a letra */
const pagina = document.querySelector('body')
const aumentar = pagina.querySelector('#aumenta')
const diminuir = pagina.querySelector('#diminui')
const redefinir = pagina.querySelector('#padrao')


/* Evento para aumentar a fonte */
aumentar.addEventListener('click',function(){
  pagina.style.fontSize = '2rem'
  console.log('olha nos aqui');
})

diminuir.addEventListener('click',function(){
  pagina.style.fontSize = '0.8rem'
  console.log('Diminui');
})

redefinir.addEventListener('click',function(){
  pagina.style.fontSize = '1rem'
  console.log('Redefinindo');
})

