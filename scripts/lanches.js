// function buscaLanches(){
//     fetch('http://localhost:3000/lanches')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(lanches){
//         var lista = document.getElementById('lista-lanches');
//         lista.innerHTML = '';
//         for(var i = 0; i < lanches.length; i++){
//             var li = document.createElement('li');
//             li.innerHTML = lanches[i].nome + ' - R$ ' + lanches[i].preco;
//             lista.appendChild(li);
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", () => {
    buscarLanches();
});

function buscarLanches(){
    fetch('http://localhost:3000/bebidas/')
    .then(function(response) {
        return response.json();
    })
    .then(function(lanches) {
        criarCardapio(lanches);
    })
    .catch(function(erro) {
        console.error('Erro ao buscar lanches:', erro);
    });
}

function criarCardapio(lanches) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    let imgSrc = bebidas.geladas[0].preco;
    console.log(imgSrc);
    img.src = imgSrc;
}