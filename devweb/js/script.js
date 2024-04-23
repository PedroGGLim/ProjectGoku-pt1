function salvar(){
    localStorage.info = document.getElementById("login").value;
}

function carregar(){
    document.getElementById("login").value = localStorage.info
}