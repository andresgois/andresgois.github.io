/* Botões de Controle */
const expansion = document.getElementById('expansion');
const contraction = document.getElementById('contraction');

/* As duas abas: Menu e Conteúdo	*/
const menu = document.querySelector('#menu');
const conteudo = document.querySelector('#conteudo');

/* Variaveis do collapse	*/
const img = document.querySelector('.imagens img');

/* Variaveis para controle da linha do tempo na section Experiência */
const alturaExp01 = document.querySelector('.descricao-empresa');
const mt = document.querySelector('#Experiencia .linha i:nth-child(2n+1)');


// Debounce do Loadsh
const debounce = function(func, wait, imediate){
  let timeout;
  return function(...args){
    const context = this;
    const later = function(){
      timeout = null;
      if(!imediate) func.apply(context, args);
    };
    const callNow = imediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
};
/* fim */

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




function altura(){
  var tam = alturaExp01.clientHeight;  
  mt.style.marginTop = (tam-40)+'px';
}

altura();

window.addEventListener('resize', function (){
  altura();
});


const target = document.querySelectorAll('[data-anime]');
const animateClass = 'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  //console.log(windowTop);
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animateClass);
    }else{
      element.classList.remove(animateClass);
    }
  })
}

animeScroll();


if(target.length){
  window.addEventListener('scroll', debounce(function(){
    animeScroll();
  },200));
}
