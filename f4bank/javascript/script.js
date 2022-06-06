//----------------- evento do primeiro botão de mais ---------------------:
let btn = document.querySelector("#pergunta1");
let container = document.querySelector("#resposta01");

function transformaEmMenos () {
    document.getElementById ("pergunta1").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais () {
    document.getElementById ("pergunta1").src = '../imagens/icone-de-mais.png';
}

btn.addEventListener('click', function () {

    if(container.style.display === 'block'){
        container.style.display = 'none';
        transformaEmMais();      

    }else{
        container.style.display = 'block';
        transformaEmMenos();
    }
});
// ---------------------------------------------------------------------------

// ----------------- evento do segundo botão de mais ----------------:
let btn2 = document.querySelector("#pergunta2");
let container2 = document.querySelector("#resposta02");

function transformaEmMenos2 () {
    document.getElementById ("pergunta2").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais2 () {
    document.getElementById ("pergunta2").src = '../imagens/icone-de-mais.png';
}

btn2.addEventListener('click', function () {

    if(container2.style.display === 'block'){
        container2.style.display = 'none';
        transformaEmMais2();        

    }else{
        container2.style.display = 'block';
        transformaEmMenos2();
    }
});
// -----------------------------------------------------------------------------

// ----------------- evento do terceiro botão de mais ---------------- :

let btn3 = document.querySelector("#pergunta3");
let container3 = document.querySelector("#resposta03");

function transformaEmMenos3 () {
    document.getElementById ("pergunta3").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais3 () {
    document.getElementById ("pergunta3").src = '../imagens/icone-de-mais.png';
}

btn3.addEventListener('click', function () {

    if(container3.style.display === 'block'){
        container3.style.display = 'none';
        transformaEmMais3();       
        
    }else{
        container3.style.display = 'block';
        transformaEmMenos3();
    }
});
// --------------------------------------------------------------------------------

// ----------------- evento do quarto botão de mais ----------------:

let btn4 = document.querySelector("#pergunta4");
let container4 = document.querySelector("#resposta04");

function transformaEmMenos4 () {
    document.getElementById ("pergunta4").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais4 () {
    document.getElementById ("pergunta4").src = '../imagens/icone-de-mais.png';
}

btn4.addEventListener('click', function () {

    if(container4.style.display === 'block'){
        container4.style.display = 'none';
        transformaEmMais4();
        
    }else{
        container4.style.display = 'block';
        transformaEmMenos4();
    }
});
// --------------------------------------------------------------------------------

// ----------------- evento do quinto botão de mais ----------------:

let btn5 = document.querySelector("#pergunta5");
let container5 = document.querySelector("#resposta05");

function transformaEmMenos5 () {
    document.getElementById ("pergunta5").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais5 () {
    document.getElementById ("pergunta5").src = '../imagens/icone-de-mais.png';
}

btn5.addEventListener('click', function () {

    if(container5.style.display === 'block'){
        container5.style.display = 'none';
        transformaEmMais5();        
        
    }else{
        container5.style.display = 'block';
        transformaEmMenos5();
    }
});
// ----------------------------------------------------------------------------------

// ----------------- evento do sexto botão de mais ----------------:

let btn6 = document.querySelector("#pergunta6");
let container6 = document.querySelector("#resposta06");

function transformaEmMenos6 () {
    document.getElementById ("pergunta6").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais6 () {
    document.getElementById ("pergunta6").src = '../imagens/icone-de-mais.png';
}

btn6.addEventListener('click', function () {

    if(container6.style.display === 'block'){
        container6.style.display = 'none';
        transformaEmMais6();        
        
    }else{
        container6.style.display = 'block';
        transformaEmMenos6();
    }
});
// -----------------------------------------------------------------------------------

// ----------------- evento do sétimo botão de mais ----------------:

let btn7 = document.querySelector("#pergunta7");
let container7 = document.querySelector("#resposta07");

function transformaEmMenos7 () {
    document.getElementById ("pergunta7").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais7 () {
    document.getElementById ("pergunta7").src = '../imagens/icone-de-mais.png';
}

btn7.addEventListener('click', function () {

    if(container7.style.display === 'block'){
        container7.style.display = 'none';
        transformaEmMais7();        
        
    }else{
        container7.style.display = 'block';
        transformaEmMenos7();
    }
});
// -------------------------------------------------------------------------------------

// ----------------- evento do oitavo botão de mais ----------------:

let btn8 = document.querySelector("#pergunta8");
let container8 = document.querySelector("#resposta08");

function transformaEmMenos8 () {
    document.getElementById ("pergunta8").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais8 () {
    document.getElementById ("pergunta8").src = '../imagens/icone-de-mais.png';
}

btn8.addEventListener('click', function () {

    if(container8.style.display === 'block'){
        container8.style.display = 'none';
        transformaEmMais8();        
        
    }else{
        container8.style.display = 'block';
        transformaEmMenos8();
    }
});
// ---------------------------------------------------------------------------------------

// ----------------- evento do nono botão de mais ----------------:

let btn9 = document.querySelector("#pergunta9");
let container9 = document.querySelector("#resposta09");

function transformaEmMenos9 () {
    document.getElementById ("pergunta9").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais9 () {
    document.getElementById ("pergunta9").src = '../imagens/icone-de-mais.png';
}

btn9.addEventListener('click', function () {

    if(container9.style.display === 'block'){
        container9.style.display = 'none';
        transformaEmMais9();        
        
    }else{
        container9.style.display = 'block';
        transformaEmMenos9();
    }
});
// ---------------------------------------------------------------------------------------

// ----------------- evento do décimo botão de mais ----------------:

let btn10 = document.querySelector("#pergunta10");
let container10 = document.querySelector("#resposta10");

function transformaEmMenos10 () {
    document.getElementById ("pergunta10").src = '../imagens/icone-de-menos.png'; 
}
function transformaEmMais10 () {
    document.getElementById ("pergunta10").src = '../imagens/icone-de-mais.png';
}

btn10.addEventListener('click', function () {

    if(container10.style.display === 'block'){
        container10.style.display = 'none';
        transformaEmMais10();        
        
    }else{
        container10.style.display = 'block';
        transformaEmMenos10();
    }
});