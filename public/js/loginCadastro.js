setTimeout(() => {
    let usuario = sessionStorage.getItem('usuario');
    if(usuario){
        logout.style.marginRight = '0px'
    }
    else
    {
        logout.style.marginRight = '-90px'
    }
}, 1);

function sairSite(){
    sessionStorage.clear();
    window.location.href = 'index.html'
}


function mostrar(){
    cadastro1.style.display = "block"
    formulario.style.display = "block"
}
var temp = setTimeout(mostrar, 1100)
// final cadastro

// inicio login

function inicio(){
    logi.style.opacity = "0"
}
function durante(){
    logi.style.opacity = "1"
}

var ini = setTimeout(inicio, 0)
var dur = setTimeout(durante, 1200)
// function cad(){
//     if (nome.value != '' && senha.value != ''){
//         window.location.href = "/jogos"
//     }
// }

var descer = setTimeout(carregar, 1500);

function carregar(){
    header.style.marginTop = '0px';
    header.style.animation = 'headerdesc 1s ease 1';
}
