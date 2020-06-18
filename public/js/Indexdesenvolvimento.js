function conferirDes(){
        textosdes.style.width = '0%';
        textosdes.style.marginLeft = '1207px';
        textosdes.style.transition = '1s'
        aparecerdes.style.marginLeft = '900px';
        aparecerdes.style.transition = '1s';
        explicaçãodes.style.width = '59%';
        explicaçãodes.style.transition = '1s';
        voltarX.style.opacity = '1';
        voltarX.style.transition = '1s';
    }
    function voltardes(){
        explicaçãodes.style.width = '0%';
        aparecerdes.style.marginLeft = '144px';
        textosdes.style.width = '59%';
        textosdes.style.marginLeft = '451px';
        voltarX.style.opacity = '0';
    }
(function () {
    var $target = $('#aparecerdes'),
        offset = $(window).height() * 3/4;

	function animeScroll() {
        var documentTop = $(document).scrollTop();
        if(documentTop == 0){
            iniprimario.style.animation = 'titulodesc 1.5s linear 1';
            inisecundario.style.animation = 'titulosecundario 1.5s linear 1';
        }
        else 
        {
            iniprimario.style.animation = '';
            inisecundario.style.animation = '';
        }

		$target.each(function(){
            var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
                imagemdes1.style.animation = 'img1 4s ease-in-out 1';
                imagemdes2.style.animation = 'img2 4s ease-in-out 1';
                aparecerdes.style.animation = 'img3 5s linear 1';
                textosdes.style.animation = 'ativar 5.5s linear 1';
                voltardes();
			} else {
                imagemdes1.style.animation = '';
                imagemdes2.style.animation = '';
                aparecerdes.style.animation = '';
                textosdes.style.animation = '';
			}
		    });
	    }

	animeScroll();
    $(document).scroll(function(){
		animeScroll();
    });
} ());