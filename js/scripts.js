/* Botões de Controle */
const expansion = document.getElementById('expansion');
const contraction = document.getElementById('contraction');

/* As duas abas: Menu e Conteúdo	*/
const menu = document.querySelector('#menu');
const conteudo = document.querySelector('#conteudo');

expansion.addEventListener('click', function(){
   menu.classList.add('expansion');
   conteudo.style.marginRight='-60%';
   expansion.style.display='none';
   contraction.style.display='block';
});

contraction.addEventListener('click', function(){
   menu.classList.remove('expansion');
   conteudo.style.marginRight='0%';
   contraction.style.display='none';
   expansion.style.display='block';
});