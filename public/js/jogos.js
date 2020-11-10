function iniciar(){
    let usuario = sessionStorage.getItem('usuario')
    if(!usuario){
        window.location.href = 'login.html'
        logout.style.marginRight = '-90px'
    }
    else
    {
        logout.style.marginRight = '0px'
    }
    // sessionStorage.removeItem('usuaio')
}

function sairSite(){
            sessionStorage.clear();
            window.location.href = 'index.html'
        }



// inicio do script do ppt do truco
    Tr = 1
    Anterior = 28
    posterior = 2
    setTimeout(inic, 1)
    function inic(){
        max=28;
        min=1;
        Tr=min;
        Anterior = max;
        posterior = ++min;
        transição = true
        carregarFoto("img/truco/tr1.png")
        carregarFoto1("img/truco/tr28.png")
        carregarFoto3("img/truco/tr2.png")
        moldura2.addEventListener("transitionend", FimTransição)
    }

    function FimTransição(){
        transição = true
    }

    function carregarFoto(foto){
        moldura2.style.backgroundImage="URL("+foto+")"
        moldura2.style.transition="background-image 0.2s"
    }
    function carregarFoto1(foto){
        moldura1.style.backgroundImage="URL("+foto+")"
        moldura1.style.transition="background-image 0.2s"
    }
    function carregarFoto3(foto){
        moldura3.style.backgroundImage="URL("+foto+")"
        moldura3.style.transition="background-image 0.2s"
    }

    function prox(){
        if (transição)
            {
                transição = false
                Tr++;
                Anterior;
                ++posterior;
                if(Tr>max){
                    Tr=--min} 
                if(Anterior>max){
                    Anterior=min} 
                if(posterior>max){
                    posterior=min} 
                carregarFoto("img/truco/tr" +Tr+ ".png")
                carregarFoto1("img/truco/tr" +(Anterior++)+ ".png")
                carregarFoto3("img/truco/tr" +(posterior)+ ".png")
            }
    }
    function ant(){
        if(transição)
            { 
                transição = false
                --Tr;
                Anterior-2;
                posterior;
                if(Tr<min){
                    Tr=max
                }
                if(Anterior<min){
                    Anterior=max
                }
                if(posterior<min){
                    posterior=max
                }
                carregarFoto("img/truco/tr" +Tr+ ".png")
                carregarFoto1("img/truco/tr" +(Anterior)+ ".png")
                carregarFoto3("img/truco/tr" +(posterior--)+ ".png")
            }
    }
    // final do ppt do truco

    // inicio do ppt do poker
    pk = 0
    AnteriorPK = 28
    posteriorPK = 1
    var set = setTimeout(começar, 1);
    function começar(){
        maxPK = 28;
        minPK = 0;
        pk = minPK;
        AnteriorPK = maxPK;
        posteriorPK = ++minPK;
        transiçãoPK = true;
        carregarFotoPK("img/poker/pk0.png")
        carregarFoto1PK("img/poker/pk28.png")
        carregarFoto3PK("img/poker/pk1.png")
        moldura2poker.addEventListener("transitionend", FimTransiçãoPK)
    }

    function FimTransiçãoPK(){
        transiçãoPK = true
    }

    function carregarFotoPK(fotoPK){
        moldura2poker.style.backgroundImage="URL("+fotoPK+")"
        moldura2poker.style.transition="background-image 0.2s"
    }
    function carregarFoto1PK(fotoPK){
        moldura1poker.style.backgroundImage="URL("+fotoPK+")"
        moldura1poker.style.transition="background-image 0.2s"
    }
    function carregarFoto3PK(fotoPK){
        moldura3poker.style.backgroundImage="URL("+fotoPK+")"
        moldura3poker.style.transition="background-image 0.2s"
    }

    function proxpoker(){
        if (transiçãoPK)
            {
                transiçãoPK = false
                pk++;
                AnteriorPK;
                ++posteriorPK;
                if(pk>maxPK){
                    pk=--minPK} 
                if(AnteriorPK>maxPK){
                    AnteriorPK=minPK} 
                if(posteriorPK>maxPK){
                    posteriorPK=minPK} 
                carregarFotoPK("img/poker/pk" +pk+ ".png")
                carregarFoto1PK("img/poker/pk" +(AnteriorPK++)+ ".png")
                carregarFoto3PK("img/poker/pk" +(posteriorPK)+ ".png")

            }
    }
    function antpoker(){
        if(transiçãoPK)
            { 
                transiçãoPK = false
                pk--;
                AnteriorPK--;
                posteriorPK;
                if(pk<minPK){
                    pk=maxPK
                }
                if(AnteriorPK<minPK){
                    AnteriorPK=maxPK
                }
                if(posterior<min){
                    posteriorPK=maxPK
                }
                carregarFotoPK("img/poker/pk" +pk+ ".png")
                carregarFoto1PK("img/poker/pk" +(AnteriorPK)+ ".png")
                carregarFoto3PK("img/poker/pk" +(posteriorPK--)+ ".png")
            }
    }
    // final do ppt do poker
    
    // inicio do ppt de pife

    pf = 0
    AnteriorPF = 13
    posteriorPF = 1
    var setpf = setTimeout(começarPF, 1);
    function começarPF(){
        maxPF = 13;
        minPF = 0;
        pf = minPF;
        AnteriorPF = maxPF;
        posteriorPF = ++minPF;
        transiçãoPF = true;
        carregarFotoPF("img/pife/pf0.png")
        carregarFoto1PF("img/pife/pf13.png")
        carregarFoto3PF("img/pife/pf1.png")
        moldura2pife.addEventListener("transitionend", FimTransiçãoPF)
    }

    function FimTransiçãoPF(){
        transiçãoPF = true
    }

    function carregarFotoPF(fotoPF){
        moldura2pife.style.backgroundImage="URL("+fotoPF+")"
        moldura2pife.style.transition="background-image 0.2s"
    }
    function carregarFoto1PF(fotoPF){
        moldura1pife.style.backgroundImage="URL("+fotoPF+")"
        moldura1pife.style.transition="background-image 0.2s"
    }
    function carregarFoto3PF(fotoPF){
        moldura3pife.style.backgroundImage="URL("+fotoPF+")"
        moldura3pife.style.transition="background-image 0.2s"
    }

    function proxpife(){
        if (transiçãoPF)
            {
                transiçãoPF = false
                pf++;
                AnteriorPF;
                ++posteriorPF;
                if(pf>maxPF){
                    pf=--minPF} 
                if(AnteriorPF>maxPF){
                    AnteriorPF=minPF} 
                if(posteriorPF>maxPF){
                    posteriorPF=minPF} 
                carregarFotoPF("img/pife/pf" +pf+ ".png")
                carregarFoto1PF("img/pife/pf" +(AnteriorPF++)+ ".png")
                carregarFoto3PF("img/pife/pf" +(posteriorPF)+ ".png")

            }
    }
    function antpife(){
        if(transiçãoPF)
            { 
                transiçãoPF = false
                pf--;
                AnteriorPF--;
                posteriorPF;
                if(pf<minPF){
                    pf=maxPF
                }
                if(AnteriorPF<minPF){
                    AnteriorPF=maxPF
                }
                if(posteriorPF < minPF){
                    posteriorPF=maxPF
                }
                carregarFotoPF("img/pife/pf" +pf+ ".png")
                carregarFoto1PF("img/pife/pf" +(AnteriorPF)+ ".png")
                carregarFoto3PF("img/pife/pf" +(posteriorPF--)+ ".png")
            }
    }

    // final do ppt de pife

    // inicio ppt buraco

    bc = 0
    AnteriorPF = 21
    posteriorPF = 1
    var setbc = setTimeout(começarBC, 1);
    function começarBC(){
        maxBC = 21;
        minBC = 0;
        bc = minBC;
        AnteriorBC = maxBC;
        posteriorBC = ++minBC;
        transiçãoBC = true;
        carregarFotoBC("img/buraco/bc0.png")
        carregarFoto1BC("img/buraco/bc21.png")
        carregarFoto3BC("img/buraco/bc1.png")
        moldura2buraco.addEventListener("transitionend", FimTransiçãoBC)
    }

    function FimTransiçãoBC(){
        transiçãoBC = true
    }

    function carregarFotoBC(fotoBC){
        moldura2buraco.style.backgroundImage="URL("+fotoBC+")"
        moldura2buraco.style.transition="background-image 0.2s"
    }
    function carregarFoto1BC(fotoBC){
        moldura1buraco.style.backgroundImage="URL("+fotoBC+")"
        moldura1buraco.style.transition="background-image 0.2s"
    }
    function carregarFoto3BC(fotoBC){
        moldura3buraco.style.backgroundImage="URL("+fotoBC+")"
        moldura3buraco.style.transition="background-image 0.2s"
    }

    function proxburaco(){
        if (transiçãoBC)
            {
                transiçãoBC = false
                bc++;
                AnteriorBC;
                ++posteriorBC;
                if(bc>maxBC){
                    bc=--minBC} 
                if(AnteriorBC>maxBC){
                    AnteriorBC=minBC} 
                if(posteriorBC>maxBC){
                    posteriorBC=minBC} 
                carregarFotoBC("img/buraco/bc" +bc+ ".png")
                carregarFoto1BC("img/buraco/bc" +(AnteriorBC++)+ ".png")
                carregarFoto3BC("img/buraco/bc" +(posteriorBC)+ ".png")

            }
    }
    function antburaco(){
        if(transiçãoBC)
            { 
                transiçãoBC = false
                bc--;
                AnteriorBC--;
                posteriorBC;
                if(bc<minBC){
                    bc=maxBC
                }
                if(AnteriorBC<minBC){
                    AnteriorBC=maxBC
                }
                if(posteriorBC < minBC){
                    posteriorBC=maxBC
                }
                carregarFotoBC("img/buraco/bc" +bc+ ".png")
                carregarFoto1BC("img/buraco/bc" +(AnteriorBC)+ ".png")
                carregarFoto3BC("img/buraco/bc" +(posteriorBC--)+ ".png")
            }
    }

    // final ppt buraco
    
    // inicio ppt blackjack

    bj = 0
    AnteriorBJ = 17
    posteriorBJ = 1
    var setbj = setTimeout(começarBJ, 1);
    function começarBJ(){
        maxBJ = 17;
        minBJ = 0;
        bj = minBJ;
        AnteriorBJ = maxBJ;
        posteriorBJ = ++minBJ;
        transiçãoBJ = true;
        carregarFotoBJ("img/blackjack/bj0.png")
        carregarFoto1BJ("img/blackjack/bj17.png")
        carregarFoto3BJ("img/blackjack/bj1.png")
        moldura2black.addEventListener("transitionend", FimTransiçãoBJ)
    }

    function FimTransiçãoBJ(){
        transiçãoBJ = true
    }

    function carregarFotoBJ(fotoBJ){
        moldura2black.style.backgroundImage="URL("+fotoBJ+")"
        moldura2black.style.transition="background-image 0.2s"
    }
    function carregarFoto1BJ(fotoBJ){
        moldura1black.style.backgroundImage="URL("+fotoBJ+")"
        moldura1black.style.transition="background-image 0.2s"
    }
    function carregarFoto3BJ(fotoBJ){
        moldura3black.style.backgroundImage="URL("+fotoBJ+")"
        moldura3black.style.transition="background-image 0.2s"
    }

    function proxblack(){
        if (transiçãoBJ)
            {
                transiçãoBJ = false
                bj++;
                AnteriorBJ;
                posteriorBJ++;
                if(bj>maxBJ){
                    bj=--minBJ} 
                if(AnteriorBJ>maxBJ){
                    AnteriorBJ=minBJ} 
                if(posteriorBJ>maxBJ){
                    posteriorBJ=minBJ} 
                carregarFotoBJ("img/blackjack/bj" +bj+ ".png")
                carregarFoto1BJ("img/blackjack/bj" +(AnteriorBJ++)+ ".png")
                carregarFoto3BJ("img/blackjack/bj" +(posteriorBJ)+ ".png")

            }
    }
    function antblack(){
        if(transiçãoBJ)
            { 
                transiçãoBJ = false
                bj--;
                AnteriorBJ--;
                posteriorBJ;
                if(bj<minBJ){
                    bj=maxBJ
                }
                if(AnteriorBJ<minBJ){
                    AnteriorBJ=maxBJ
                }
                if(posteriorBJ < minBJ){
                    posteriorBJ=maxBJ
                }
                carregarFotoBJ("img/blackjack/bj" +bj+ ".png")
                carregarFoto1BJ("img/blackjack/bj" +(AnteriorBJ)+ ".png")
                carregarFoto3BJ("img/blackjack/bj" +(posteriorBJ--)+ ".png")
            }
    }

    // final ppt blackjack
    function subir(){
        window.location.href="#html"
    }
    

    setInterval(() => {
        if(window.scrollY > 600){
            subirbtn.style.opacity = "1";
        } 
        else
        {
            subirbtn.style.opacity = "0";
        }
    }, 1000);