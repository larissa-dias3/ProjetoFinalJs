document.addEventListener("DOMContentLoaded", () => {
    let dados = buscarBebidas();
    console.log(dados);
});

function buscarBebidas(){
    fetch('http://localhost:3000/')
    .then(function(response){
        let bebidas = response.json();
        console.log(bebidas);
        return bebidas;
    })
    // .then(function(bebidas){
    //     var lista = document.getElementById('lista-bebidas');
    //     lista.innerHTML = '';
    //     for(var i = 0; i < bebidas.length; i++){
    //         var li = document.createElement('li');
    //         li.innerHTML = bebidas[i].nome + ' - R$ ' + bebidas[i].preco;
    //         lista.appendChild(li);
    //     }
    // })
    .catch(function(erro){
        console.error('Erro ao buscar bebidas:', erro);
    });
}


