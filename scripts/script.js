function buscaLanches(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/lanches', true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var lanches = JSON.parse(xhr.responseText);
                var lista = document.getElementById('lista-lanches');
                lista.innerHTML = '';
                for(var i = 0; i < lanches.length; i++){
                    var li = document.createElement('li');
                    li.innerHTML = lanches[i].nome + ' - R$ ' + lanches[i].preco;
                    lista.appendChild(li);
                }
            }
        }
    }
    xhr.send();
}
function buscaBebidas(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/bebidas', true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var bebidas = JSON.parse(xhr.responseText);
                var lista = document.getElementById('lista-bebidas');
                lista.innerHTML = '';
                for(var i = 0; i < bebidas.length; i++){
                    var li = document.createElement('li');
                    li.innerHTML = bebidas[i].nome + ' - R$ ' + bebidas[i].preco;
                    lista.appendChild(li);
                }
            }
        }
    }
    xhr.send();
}