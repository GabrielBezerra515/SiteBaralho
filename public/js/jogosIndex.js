// inicio script do index do Truco
function inicioT(){
    historiaT.style.marginLeft = '1500px'
    torneiosT.style.marginLeft = '1500px'
    torneiosBT.style.marginLeft = '1500px'
    principaisJT.style.marginLeft = '1500px'
}

function HistoriaT(){
    historiaT.style.marginLeft = '0px'
    torneiosT.style.marginLeft = '1500px'
    torneiosBT.style.marginLeft = '1500px'
    principaisJT.style.marginLeft = '1500px'
}

function TorneiosT(){
    historiaT.style.marginLeft = '1500px'
    torneiosT.style.marginLeft = '0px'
    torneiosBT.style.marginLeft = '1500px'
    principaisJT.style.marginLeft = '1500px'
}

function TorneiosBFT(){
    historiaT.style.marginLeft = '1500px'
    torneiosT.style.marginLeft = '1500px'
    torneiosBT.style.marginLeft = '0px'
    principaisJT.style.marginLeft = '1500px'
}

function TorneiosPJ(){
    historiaT.style.marginLeft = '1500px'
    torneiosT.style.marginLeft = '1500px'
    torneiosBT.style.marginLeft = '1500px'
    principaisJT.style.marginLeft = '0px'
}


(function () {
    var $inicioT = $('#explicaHistoriaTruco');

	function animeScroll() {
        var explicaçãoTop = $('#explicaHistoriaTruco').scrollTop();
        console.log(explicaçãoTop);
		$inicioT.each(function(){
            var itemTop = $(this).offset().top;
			if (explicaçãoTop > 298 && explicaçãoTop < 793) {
                historiaT.className = 'historiaTruco1';
                historiaT.style.transition = 'all 1s';

            } 
            else if(explicaçãoTop >= 793)
            {
                historiaT.className = 'historiaTruco2';
                historiaT.style.transition = 'all 1s';
            }
            else{
                historiaT.className = 'historiaTruco';
                historiaT.style.transition = 'all 1s';
            }
		    });
	    }

	animeScroll();
    $('#explicaHistoriaTruco').scroll(function(){
		animeScroll();
    });
} ());

(function () {
    var $trucoIndex = $('#pai-amostra-truco'),
        offtruco = $(window).height() * 3/4;

	function animeScroll() {
        var documentTop = $(document).scrollTop();
		$trucoIndex.each(function(){
            var itemTop = $(this).offset().top;
			if (documentTop < itemTop - offtruco) {
                inicioT();
            }
            
		    });
	    }

	animeScroll();
    $(document).scroll(function(){
		animeScroll();
    });
} ());
// final do script do index do truco

// inicio do script do index do poker

function inicioP(){
    historiaP.style.marginLeft = '1500px'
    torneiosP.style.marginLeft = '1500px'
    torneiosBP.style.marginLeft = '1500px'
    principaisJP.style.marginLeft = '1500px'
}

function HistoriaP(){
    historiaP.style.marginLeft = '0px'
    torneiosP.style.marginLeft = '1500px'
    torneiosBP.style.marginLeft = '1500px'
    principaisJP.style.marginLeft = '1500px'
}

function TorneiosP(){
    historiaP.style.marginLeft = '1500px'
    torneiosP.style.marginLeft = '0px'
    torneiosBP.style.marginLeft = '1500px'
    principaisJP.style.marginLeft = '1500px'
}

function TorneiosBFP(){
    historiaP.style.marginLeft = '1500px'
    torneiosP.style.marginLeft = '1500px'
    torneiosBP.style.marginLeft = '0px'
    principaisJP.style.marginLeft = '1500px'
}

function TorneiosPJP(){
    historiaP.style.marginLeft = '1500px'
    torneiosP.style.marginLeft = '1500px'
    torneiosBP.style.marginLeft = '1500px'
    principaisJP.style.marginLeft = '0px'
}

function fecharTPP(){
    torneioP1.className = 'torneioP1';
    torneioP1.style.overflow = '';
    torneioP1p.style.opacity = '0';
    torneioP2.className = 'torneioP2';
    torneioP2.style.overflow = '';
    torneioP2p.style.opacity = '0';
    torneioP3.className = 'torneioP3';
    torneioP3.style.overflow = '';
    torneioP3p.style.opacity = '0';
    torneioP4.className = 'torneioP4';
    torneioP4.style.overflow = '';
    torneioP4p.style.opacity = '0';
    torneioP5.className = 'torneioP5';
    torneioP5.style.overflow = '';
    torneioP5p.style.opacity = '0';
    fecharP.style.display = 'none'
}

function tornP1(){
    torneioP1.classList.add('torneioP11');
    setTimeout(() => {torneioP1.style.overflow = 'scroll'}, 1500);
    torneioP1p.style.opacity = '1'
    torneioP2.classList.add('afastar1');
    torneioP3.classList.add('afastar1');
    torneioP4.classList.add('afastar1');
    torneioP5.classList.add('afastar1');
    fecharP.style.display = 'block'
}

function tornP2(){
    torneioP1.classList.add('afastar2');
    setTimeout(() => {torneioP2.style.overflow = 'scroll'}, 1500);
    torneioP2p.style.opacity = '1'
    torneioP2.classList.add('torneioP22');
    torneioP3.classList.add('afastar1');
    torneioP4.classList.add('afastar2');
    torneioP5.classList.add('afastar1');
    fecharP.style.display = 'block'
}

function tornP3(){
    torneioP1.classList.add('afastar3');
    setTimeout(() => {torneioP3.style.overflow = 'scroll'}, 1500);
    torneioP3p.style.opacity = '1'
    torneioP2.classList.add('afastar3');
    torneioP3.classList.add('torneioP33');
    torneioP4.classList.add('afastar4');
    torneioP5.classList.add('afastar3');
    fecharP.style.display = 'block'
}

function tornP4(){
    torneioP1.classList.add('afastar3');
    setTimeout(() => {torneioP4.style.overflow = 'scroll'}, 1500);
    torneioP4p.style.opacity = '1'
    torneioP2.classList.add('afastar3');
    torneioP3.classList.add('afastar4');
    torneioP4.classList.add('torneioP44');
    torneioP5.classList.add('afastar3');
    fecharP.style.display = 'block'
}

function tornP5(){
    torneioP1.classList.add('afastar2');
    setTimeout(() => {torneioP5.style.overflow = 'scroll'}, 1500);
    torneioP5p.style.opacity = '1'
    torneioP2.classList.add('afastar2');
    torneioP3.classList.add('afastar2');
    torneioP4.classList.add('afastar2');
    torneioP5.classList.add('torneioP55');
    fecharP.style.display = 'block'
}

(function () {
    var $inicioP = $('#explicaHistoriaPoker');

	function animeScrollP() {
        var explicaçãoTopP = $('#explicaHistoriaPoker').scrollTop();
        console.log(explicaçãoTopP);
		$inicioP.each(function(){
			if (explicaçãoTopP > 10 && explicaçãoTopP <= 100) {
                historiaP.className = 'historiaPoker1';
                historiaP.style.transition = 'all 1s';

            } 
            else if(explicaçãoTopP > 100 && explicaçãoTopP <= 200)
            {
                historiaP.className = 'historiaPoker2';
                historiaP.style.transition = 'all 1s';
            }
            else if(explicaçãoTopP > 200)
            {
                historiaP.className = 'historiaPoker3';
                historiaP.style.transition = 'all 1s';
            }
            else{
                historiaP.className = 'historiaPoker';
                historiaP.style.transition = 'all 1s';
            }
		    });
	    }

	animeScrollP();
    $('#explicaHistoriaPoker').scroll(function(){
		animeScrollP();
    });
} ());

// inicio torneio beneficente de poker

function conferir(){
    explicaInicialTBP.style.marginTop = '-700px';
    explicaInicialTBP.style.opacity = '0';
    mostrarTorneiosBP.style.marginTop = '344px';
    fecharExP.setAttribute("onclick", "fecharexplicaPoker()");
    fecharExP.style.cursor = 'pointer';
}

function fecharexplicaPoker(){
    explicaInicialTBP.style.marginTop = '2%';
    explicaInicialTBP.style.opacity = '1';
    mostrarTorneiosBP.style.marginTop = '1000px';
    fecharExP.removeAttribute("onclick", "fecharexplicaPoker()");
}

// final do torneio beneficente

// inicio dos mitos do Poker

function fecharJP(){
    sobreJPK.style.height = '0px';
    sobreJPK2.style.height = '0px';
    sobreJPK3.style.height = '0px';
    sobreJPK4.style.height = '0px';
    sobreJPK5.style.height = '0px';
    setTimeout(() => {
        jogadorPoker1.style.marginTop = '0';
        jogadorPoker2.style.marginTop = '0';
        jogadorPoker3.style.marginTop = '0';
        jogadorPoker4.style.marginTop = '0';
        jogadorPoker5.style.marginTop = '0';
    }, 1500);
}

function chamarJP1(){
    jogadorPoker1.style.marginTop = '-659px';
    setTimeout(() => {
        sobreJPK.style.height = '500px'; 
    }, 1500);
}

function chamarJP2(){
    jogadorPoker2.style.marginTop = '-659px';
    setTimeout(() => {
        sobreJPK2.style.height = '500px'; 
    }, 1500);
}

function chamarJP3(){
    jogadorPoker3.style.marginTop = '-659px';
    setTimeout(() => {
        sobreJPK3.style.height = '500px'; 
    }, 1500);
}
function chamarJP4(){
    jogadorPoker4.style.marginTop = '-659px';
    setTimeout(() => {
        sobreJPK4.style.height = '500px'; 
    }, 1500);
}
function chamarJP5(){
    jogadorPoker5.style.marginTop = '-659px';
    setTimeout(() => {
        sobreJPK5.style.height = '500px'; 
    }, 1500);
}


// final dos mitos do poker

(function () {
    var $PokerIndex = $('#pai-amostra-poker'),
        offpoker = $(window).height() * 3/4;

	function animeScrollP() {
        var documentTop = $(document).scrollTop();
		$PokerIndex.each(function(){
            var itemTop = $(this).offset().top;
			if (documentTop < itemTop - offpoker) {
                inicioP();
            }
            
		    });
	    }

	animeScrollP();
    $(document).scroll(function(){
		animeScrollP();
    });
} ());

// final do index do poker