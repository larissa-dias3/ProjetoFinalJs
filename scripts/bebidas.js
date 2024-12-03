document.addEventListener("DOMContentLoaded", () => {
    buscarBebidas();
});

function buscarBebidas(){
    fetch('http://localhost:3000/bebidas/')
    .then(function(response) {
        return response.json();
    })
    .then(function(bebidas) {
        criarCardapio(bebidas);
    })
    .catch(function(erro) {
        console.error('Erro ao buscar bebidas:', erro);
    });
}

function criarCardapio(bebidas) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    let imgSrc = bebidas.geladas[0].preco;
    console.log(imgSrc);
    img.src = imgSrc;


    // let lista = document.getElementById('lista-bebidas');
    // lista.innerHTML = '';
    // for(let i = 0; i < bebidas.length; i++){
    //     let li = document.createElement('li');
    //     li.innerHTML = bebidas[i].nome + ' - R$ ' + bebidas[i].preco;
    //     lista.appendChild(li);
    // }
}
