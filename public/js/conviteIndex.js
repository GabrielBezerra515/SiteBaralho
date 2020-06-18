function conviteAtivar(){
            setTimeout(() => {
                convite1.style.display = 'none'
                AtivarConvite2()
            }, 3000);
            function AtivarConvite2(){
                setTimeout(() => {
                    convite2.style.display = 'none';
                    ConviteCadastro.style.display = 'block'
                    AtivarConvite3()
                }, 3000);
            }
            function AtivarConvite3(){
                setTimeout(() => {
                    convite3.style.display = 'none'
                    ConviteCadastro.style.opacity = '1'
                    textoC1.style.width = '100%';
                    textoC2.style.width = '100%';
                    textoC3.style.width = '100%';
                }, 3000);
            }
        }

        function direcionarUser(){
            window.location.href = 'cadastro.html'
        }

        (function () {
            var $inicioC = $('#pai-convite'),
                offconvite = $(window).height() * 3/4;

            function animeScrollC() {
                var documentTopC = $(document).scrollTop();
                $inicioC.each(function(){
                    var itemTop = $(this).offset().top;
                    if (documentTopC > (itemTop - offconvite)) {
                        conviteAtivar();
                        convite1.style.animation = 'c1Scala 3s ease-in 1';
                        convite2.style.animation = 'c2Scala 3s ease-in 3s 1';
                        convite3.style.animation = 'c3Scala 3s ease-in 6s 1';
                    }
                    
                    });
                }

            animeScrollC();
            $(document).scroll(function(){
                animeScrollC();
            });
        } ());