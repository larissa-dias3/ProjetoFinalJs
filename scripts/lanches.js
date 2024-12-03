function buscaLanches(){
    fetch('http://localhost:3000/lanches')
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
}