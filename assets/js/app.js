var esobre = function() {
    sobre = document.querySelector('#sobre');
    habilidades = document.querySelector('#habilidades');
    formacao = document.querySelector('#formacao');
    hobbies = document.querySelector('#hobbies');
    books = document.querySelector('#books');

    sobre.style.display = "block";
    habilidades.style.display = "none";
    formacao.style.display = "none";
    hobbies.style.display = "none";
    books.style.display = "none";

}

function ehabilidades() {
    sobre = document.querySelector('#sobre');
    habilidades = document.querySelector('#habilidades');
    formacao = document.querySelector('#formacao');
    hobbies = document.querySelector('#hobbies');
    books = document.querySelector('#books');

    sobre.style.display = "none";
    habilidades.style.display = "block";
    formacao.style.display = "none";
    hobbies.style.display = "none";
    books.style.display = "none";

}

var eformacao = function() {
    sobre = document.querySelector('#sobre');
    habilidades = document.querySelector('#habilidades');
    formacao = document.querySelector('#formacao');
    hobbies = document.querySelector('#hobbies');
    books = document.querySelector('#books');

    sobre.style.display = "none";
    habilidades.style.display = "none";
    formacao.style.display = "block";
    hobbies.style.display = "none";
    books.style.display = "none";

}

var ehobbies = function() {
    sobre = document.querySelector('#sobre');
    habilidades = document.querySelector('#habilidades');
    formacao = document.querySelector('#formacao');
    hobbies = document.querySelector('#hobbies');
    books = document.querySelector('#books');

    sobre.style.display = "none";
    habilidades.style.display = "none";
    formacao.style.display = "none";
    hobbies.style.display = "block";
    books.style.display = "none";

}

var ebooks = function() {
    sobre = document.querySelector('#sobre');
    habilidades = document.querySelector('#habilidades');
    formacao = document.querySelector('#formacao');
    hobbies = document.querySelector('#hobbies');
    books = document.querySelector('#books');

    sobre.style.display = "none";
    habilidades.style.display = "none";
    formacao.style.display = "none";
    hobbies.style.display = "none";
    books.style.display = "block";

}

var modoNoturno = function() {
    var body = document.getElementById('corpo')
    if (body.classList.contains('modo-noturno')) {
        body.classList.remove('modo-noturno');
    } else {
        body.classList.add('modo-noturno');
    }

}