function transiçãohis(){

        img1his.style.transition = 'margin-top 1s ease-in-out';
        img1his.style.marginTop = '-550px';
        titulohis1.style.marginTop = '1500px';
        titulohis1.style.transition = 'margin-top 1s ease-in-out 0.2s';
        explicahis1.style.marginTop = '1500px';
        explicahis1.style.transition = 'margin-top 1s ease-in-out 0.1s';
        btnhistoria.style.marginTop = '1500px';
        btnhistoria.style.transition = 'margin-top 1s ease-in-out';
        começohistoria.style.transition = 'width 1s ease 0.4s'
        começohistoria.style.width = '0%';
        historia1.style.width = '1044px';
        historia1.style.transition = 'width 1s linear 0.2s';
        btnsubirhis.style.width = '76px';
        btndescerhis.style.width = '76px';
        endhis.style.marginTop = '125px';
        btnsubirhis.style.boxShadow = '0px 0px 16px 13px black';
        btndescerhis.style.boxShadow = '0px 0px 16px 13px black';
        setTimeout(trocarhis, 800);
    } 

    function trocarhis(){
        historia1.style.transition = 'margin-left 1s ease 0.2s';
        historia1.style.marginLeft = '0px'; 
        btnsubirhis.style.transition = 'margin-left 1s ease 0.3s'
        btnsubirhis.style.marginLeft = '1070px'
        btndescerhis.style.transition = 'margin-left 1s ease 0.3s'
        btndescerhis.style.marginLeft = '1070px'
    }
    var subir = 0;
    function subirhis(){
        var sumTop = subir - 50;
        subir = sumTop;
        ph1.style.marginTop = `${sumTop}px`;
        ph1.style.transition = `margin-top 0.2s linear`;
    }
    function descerhis(){
        var desTop = subir + 50;
        subir = desTop;
        ph1.style.marginTop = `${desTop}px`;
        ph1.style.transition = `margin-top 0.2s linear`;
    }

    function fechar(){
        endhis.style.marginTop = '-125px'
        historia1.style.marginLeft= '1500px';
        historia1.style.transition = 'margin-left 1s ease-in-out';
        btnsubirhis.style.marginLeft = '1500px';
        btnsubirhis.style.boxShadow = '0px 0px 0px 0px black';
        btndescerhis.style.marginLeft = '1500px';
        btndescerhis.style.boxShadow = '0px 0px 0px 0px black';
        começohistoria.style.width = '100%'
        img1his.style.transition = 'margin-top 1s ease-in-out';
        img1his.style.marginTop = '161px';
        titulohis1.style.marginTop = '182px';
        titulohis1.style.transition = 'margin-top 1s ease-in-out';
        explicahis1.style.marginTop = '255px';
        explicahis1.style.transition = 'margin-top 1s ease-in-out 0.1s';
        btnhistoria.style.marginTop = '445px';
        btnhistoria.style.transition = 'margin-top 1s ease-in-out 0.2s';
    }

    (function () {
    var $gohis = $('#começohistoria'),
        offset = $(window).height() * 3/4;

	function animeScroll() {
        var documentTop = $(document).scrollTop();

		$gohis.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop < itemTop - offset){
                fechar();
            }
			if (documentTop > itemTop - offset) {
                img1his.style.transition = 'margin-top 1s ease-in-out';
                img1his.style.marginTop = '161px';
                titulohis1.style.marginTop = '182px';
                titulohis1.style.transition = 'margin-top 1s ease-in-out';
                explicahis1.style.marginTop = '255px';
                explicahis1.style.transition = 'margin-top 1s ease-in-out 0.1s';
                btnhistoria.style.marginTop = '445px';
                btnhistoria.style.transition = 'margin-top 1s ease-in-out 0.2s';
            }
             else {
                img1his.style.transition = '';
                img1his.style.marginTop = '';
                titulohis1.style.marginTop = '';
                titulohis1.style.transition = '';
                explicahis1.style.marginTop = '';
                explicahis1.style.transition = '';
                btnhistoria.style.marginTop = '';
                btnhistoria.style.transition = '';
			}
		    });
	    }

	animeScroll();
    $(document).scroll(function(){
		animeScroll();
    });
} ());