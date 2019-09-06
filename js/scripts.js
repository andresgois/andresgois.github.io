/* Botões de Controle */
const expansion = document.getElementById('expansion');
const contraction = document.getElementById('contraction');

/* As duas abas: Menu e Conteúdo	*/
const menu = document.querySelector('#menu');
const conteudo = document.querySelector('#conteudo');

/* Variaveis do collapse	*/
const img = document.querySelector('.imagens img');


expansion.addEventListener('click', function(){
   menu.classList.add('expansion');
   conteudo.style.marginRight='-60%';
   expansion.style.display='none';
   contraction.style.display='block';
   menu.style.opacity='1';
});

contraction.addEventListener('click', function(){
   menu.classList.remove('expansion');
   conteudo.style.marginRight='0%';
   contraction.style.display='none';
   expansion.style.display='block';
   menu.style.opacity='0';
});

let n = 1;
window.load = setInterval(function(){
    slide(n);
    n++;
    if(n>2){
        n=1;
    }
}, 3000); 


var numberBg =1;

function slide(n){
	var allBs = 2;
	img.src='./imagens/mobile-slide0'+n+'.jpg';
	botoes(n, allBs);
	numberBg=n;
}


function botoes(n, m){
    document.getElementById('botoes').innerHTML = "";
    for(a=1;a<=m;a++){
        if(a==n){
            document.getElementById('botoes').innerHTML += "<li class='selected' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML += "<li onclick='slide("+a+")''></li>";
        }
    }
}
