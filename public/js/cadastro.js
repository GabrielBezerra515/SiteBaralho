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