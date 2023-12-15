window.onscroll = function() {scrollFuncao(), scrollFuncaoMenuNav()};

function scrollFuncao(){
    if(document.documentElement.scrollTop > 100){
        document.getElementById("menuNavegacao").style.top = '0';
    }
    else{
        document.getElementById("menuNavegacao").style.top = '-68px';
    }
}

function scrollFuncaoMenuNav(){
    if(document.documentElement.scrollTop > 568 && document.documentElement.scrollTop < 1300){
        document.getElementById("quemSomos").style.borderBottom = '2px solid orange';

    }
    else{
        document.getElementById("quemSomos").style.borderBottom = '1px solid transparent';
    }
    if(document.documentElement.scrollTop > 1300 && document.documentElement.scrollTop < 2050){
        document.getElementById("cardapio").style.borderBottom = '2px solid orange';
    }
    else{
        document.getElementById("cardapio").style.borderBottom = '1px solid transparent';
    }
    if(document.documentElement.scrollTop > 2060 && document.documentElement.scrollTop < 2393){
        document.getElementById("contato").style.borderBottom = '2px solid orange';
    }
    else{
        document.getElementById("contato").style.borderBottom = '1px solid transparent';
    }
    if(document.documentElement.scrollTop > 2394){
        document.getElementById("informacoes").style.borderBottom = '2px solid orange';
    }
    else{
        document.getElementById("informacoes").style.borderBottom = '1px solid transparent';
    }
}

var imagemSegundaPagina = document.querySelector('#imagemSegundaPagina')

function imagemModificarEntrou(){
    document.getElementById("imagemSegundaPagina").style.borderRadius = '10px 10px 10px 10px';

}

imagemSegundaPagina.addEventListener('mouseenter', imagemModificarEntrou)

function imagemModificarSaiu(){
    document.getElementById("imagemSegundaPagina").style.borderRadius = '14px 128px 12px 158px';
}

imagemSegundaPagina.addEventListener('mouseout', imagemModificarSaiu)


var botaoPassar = document.querySelector('.botaoManual')
var contador = 1

document.querySelector("#carroselBotao1").checked = true

setInterval(()=> {
    intervaloImagem()
}, 5000)

function intervaloImagem(){
    contador++
    if(contador > 3){
        contador = 1
    }

    document.querySelector(`#carroselBotao${contador}`).checked = true
}



