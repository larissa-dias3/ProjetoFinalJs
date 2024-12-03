
function buscaLanches(){
    fetch('http://localhost:8080/lanches')
    .then(function(response){
        return response.json();
    })
    .then(function(lanches){
        var lista = document.getElementById('lista-lanches');
        lista.innerHTML = '';
        for(var i = 0; i < lanches.length; i++){
            var li = document.createElement('li');
            li.innerHTML = lanches[i].nome + ' - R$ ' + lanches[i].preco;
            lista.appendChild(li);
        }
    });

    let titulo = document.querySelector("h1");
    titulo.innerHTML += "Lanches";

}
function buscarBebidas(){

    fetch('http://localhost:8080/bebidas')
    .then(function(response){
        return response.json();
    })
    .then(function(bebidas){
        var lista = document.getElementById('lista-bebidas');
        lista.innerHTML = '';
        for(var i = 0; i < bebidas.length; i++){
            var li = document.createElement('li');
            li.innerHTML = bebidas[i].nome + ' - R$ ' + bebidas[i].preco;
            lista.appendChild(li);
        }
    });
    let titulo2 = document.querySelector("h1");
    titulo2.innerHTML += "Bebidas";
}


