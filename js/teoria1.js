
    function fecharteoria1rainha(){
        img1rai1.className = 'img1rainha1'
        img2rai1.className = 'img2rainha1'
        img3rai1.className = 'img3rainha1'
        img4rai1.className = 'img4rainha1'
        divvaleteteoria1.className = 'valeteteoria1';
        divreiteoria1.className = 'reiteoria1';
        tiltteoria1.style.opacity = '1';
        removerrainha();
        fecharteoria.style.opacity = '0';
        fecharteoriarei.style.marginTop = '-534px';
        fecharteoriavalete.style.marginTop = '-534px';
        divrainhasteoria1.style.height = '400px';
    }

        function rainhas1(){
            img1rai1.className = 'img1rainha11';
            img2rai1.className = 'img2rainha11';
            img3rai1.className = 'img3rainha11';
            img4rai1.className = 'img4rainha11';
            divvaleteteoria1.className = 'valeteteoria11';
            divreiteoria1.className = 'reiteoria11';
            tiltteoria1.style.opacity = '0.25';
            setTimeout(atribuirrainha, 1500);
            fecharteoria.style.opacity = '1';
            fecharteoriarei.style.marginTop = '-2000px';
            fecharteoriavalete.style.marginTop = '-2000px';
            divrainhasteoria1.style.height = '0px';
        }

    function atribuirrainha(){
        img1rai1.setAttribute("onmouseover", "img1blurrainha1()");
        img2rai1.setAttribute("onmouseover", "img2blurrainha1()");
        img3rai1.setAttribute("onmouseover", "img3blurrainha1()");
        img4rai1.setAttribute("onmouseover", "img4blurrainha1()");
    }
    function removerrainha(){
        img1rai1.removeAttribute("onmouseover", "img1blurrainha1()");
        img2rai1.removeAttribute("onmouseover", "img2blurrainha1()");
        img3rai1.removeAttribute("onmouseover", "img3blurrainha1()");
        img4rai1.removeAttribute("onmouseover", "img4blurrainha1()");
        divhoverimg1rai1.style.height = '0px';
        divhoverimg2rai1.style.height = '0px';
        divhoverimg3rai1.style.height = '0px';
        divhoverimg4rai1.style.height = '0px';
    }

    function img1blurrainha1(){
        divhoverimg1rai1.style.height = '311px';
    }
    function img1blurendrainha1(){
        divhoverimg1rai1.style.height = '0px';
    }

    function img2blurrainha1(){
        divhoverimg2rai1.style.height = '311px';
    }
    function img2blurendrainha1(){
        divhoverimg2rai1.style.height = '0px';
    }

    function img3blurrainha1(){
        divhoverimg3rai1.style.height = '311px';
    }
    function img3blurendrainha1(){
        divhoverimg3rai1.style.height = '0px';
    }

    function img4blurrainha1(){
        divhoverimg4rai1.style.height = '311px';
    }
    function img4blurendrainha1(){
        divhoverimg4rai1.style.height = '0px';
    }

    // final do script das rainhas

    // inicio do script dos reis

    function fecharteoria1rei(){
        img1REI1.className = 'img1rei1'
        img2REI1.className = 'img2rei1'
        img3REI1.className = 'img3rei1'
        img4REI1.className = 'img4rei1'
        divvaleteteoria1.className = 'valeteteoria1';
        divrainhasteoria1.className = 'rainhasteoria1';
        removerrei();
        fecharteoriarei.style.opacity = '0';
        tiltteoria1.style.opacity = '1';
        fecharteoria.style.marginTop = '-534px';
        fecharteoriavalete.style.marginTop = '-534px';
        divreiteoria1.style.height = '400px';
    }

    function REI1(){
        img1REI1.className = 'img1REI11';
        img2REI1.className = 'img2REI11';
        img3REI1.className = 'img3REI11';
        img4REI1.className = 'img4REI11';
        divvaleteteoria1.className = 'valeteteoria11';
        divrainhasteoria1.className = 'rainhasteoria11';
        tiltteoria1.style.opacity = '0.25';
        setTimeout(atribuirreis, 1500);
        fecharteoriarei.style.opacity = '1';
        fecharteoria.style.marginTop = '-2000px';
        fecharteoriavalete.style.marginTop = '-2000px';
        divreiteoria1.style.height = '0px';
    }
    function atribuirreis(){
        img1REI1.setAttribute("onmouseover", "img1blurrei1()");
        img2REI1.setAttribute("onmouseover", "img2blurrei1()");
        img3REI1.setAttribute("onmouseover", "img3blurrei1()");
        img4REI1.setAttribute("onmouseover", "img4blurrei1()");
    }
    function removerrei(){
        img1REI1.removeAttribute("onmouseover", "img1blurrei1()");
        img2REI1.removeAttribute("onmouseover", "img2blurrei1()");
        img3REI1.removeAttribute("onmouseover", "img3blurrei1()");
        img4REI1.removeAttribute("onmouseover", "img4blurrei1()");
        divhoverimg1rei1.style.height = '0px';
        divhoverimg2rei1.style.height = '0px';
        divhoverimg3rei1.style.height = '0px';
        divhoverimg4rei1.style.height = '0px';
    }

    function img1blurrei1(){
        divhoverimg1rei1.style.height = '311px';
    }
    function img1blurendrei1(){
        divhoverimg1rei1.style.height = '0px';
    }

    function img2blurrei1(){
        divhoverimg2rei1.style.height = '311px';
    }
    function img2blurendrei1(){
        divhoverimg2rei1.style.height = '0px';
    }

    function img3blurrei1(){
        divhoverimg3rei1.style.height = '311px';
    }
    function img3blurendrei1(){
        divhoverimg3rei1.style.height = '0px';
    }

    function img4blurrei1(){
        divhoverimg4rei1.style.height = '311px';
    }
    function img4blurendrei1(){
        divhoverimg4rei1.style.height = '0px';
    }
    
    // final do script dos reis

    // inicio do script dos valetes

    function fecharteoria1valete(){
        img1valete1.className = 'img1valete1'
        img2valete1.className = 'img2valete1'
        img3valete1.className = 'img3valete1'
        img4valete1.className = 'img4valete1'
        divreiteoria1.className = 'reiteoria1';
        divrainhasteoria1.className = 'rainhasteoria1';
        removervalete();
        fecharteoriavalete.style.opacity = '0';
        tiltteoria1.style.opacity = '1';
        fecharteoriarei.style.marginTop = '-534px';
        fecharteoria.style.marginTop = '-534px';
        divvaleteteoria1.style.height = '400px';
    }

    function valete1(){
        img1valete1.className = 'img1valete11';
        img2valete1.className = 'img2valete11';
        img3valete1.className = 'img3valete11';
        img4valete1.className = 'img4valete11';
        divreiteoria1.className = 'reiteoria11';
        divrainhasteoria1.className = 'rainhasteoria11';
        tiltteoria1.style.opacity = '0.25';
        setTimeout(atribuirvaletes, 1500);
        fecharteoriavalete.style.opacity = '1';
        // fecharteoria.style.marginTop = '-2000px';
        fecharteoriarei.style.marginTop = '-2000px';
        divvaleteteoria1.style.height = '0px';
    }
    function atribuirvaletes(){
        img1valete1.setAttribute("onmouseover", "img1blurvalete1()");
        img2valete1.setAttribute("onmouseover", "img2blurvalete1()");
        img3valete1.setAttribute("onmouseover", "img3blurvalete1()");
        img4valete1.setAttribute("onmouseover", "img4blurvalete1()");
    }
    function removervalete(){
        img1valete1.removeAttribute("onmouseover", "img1blurvalete1()");
        img2valete1.removeAttribute("onmouseover", "img2blurvalete1()");
        img3valete1.removeAttribute("onmouseover", "img3blurvalete1()");
        img4valete1.removeAttribute("onmouseover", "img4blurvalete1()");
        divhoverimg1valete1.style.height = '0px';
        divhoverimg2valete1.style.height = '0px';
        divhoverimg3valete1.style.height = '0px';
        divhoverimg4valete1.style.height = '0px';
    }

    function img1blurvalete1(){
        divhoverimg1valete1.style.height = '311px';
    }
    function img1blurendvalete1(){
        divhoverimg1valete1.style.height = '0px';
    }

    function img2blurvalete1(){
        divhoverimg2valete1.style.height = '311px';
    }
    function img2blurendvalete1(){
        divhoverimg2valete1.style.height = '0px';
    }

    function img3blurvalete1(){
        divhoverimg3valete1.style.height = '311px';
    }
    function img3blurendvalete1(){
        divhoverimg3valete1.style.height = '0px';
    }

    function img4blurvalete1(){
        divhoverimg4valete1.style.height = '311px';
    }
    function img4blurendvalete1(){
        divhoverimg4valete1.style.height = '0px';
    }

    // final do script dos valetes