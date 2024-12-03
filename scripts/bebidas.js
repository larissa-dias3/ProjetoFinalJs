document.addEventListener("DOMContentLoaded", () => {
    buscarBebidas();
});

function buscarBebidas(){
    fetch('http://localhost:4888/bebidas')
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
    const section = document.querySelector('section');

    bebidas.forEach(bebida => {
        const card = document.createElement('div');
        card.classList.add('card');
        const infos = document.createElement('div');
        infos.classList.add('informacoes');
        const produto = document.createElement('div');
        produto.classList.add('produto');
        const preco = document.createElement('div');
        preco.classList.add('preco');

        const img = document.createElement('img');
        img.src = `../assets/${bebida.imagem}`;
        const h2 = document.createElement('h2');
        h2.textContent = bebida.nome;
        const pProduto = document.createElement('p');
        pProduto.textContent = bebida.descricao;
        const pPreco = document.createElement('p');
        pPreco.textContent = bebida.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
        const svgImg = document.createElement('img');
        svgImg.src = '../assets/carrinho.svg';

        preco.appendChild(pPreco);
        preco.appendChild(svgImg);
        produto.appendChild(h2);
        produto.appendChild(pProduto);
        infos.appendChild(produto);
        infos.appendChild(preco);
        card.appendChild(img);
        card.appendChild(infos);
        section.appendChild(card);
    });
}
