//espera a pagina terminar de carregar para chamar a função buscarLanches
document.addEventListener("DOMContentLoaded", () => {
    buscarLanches();
});
//requisição para o servidor com fetch
function buscarLanches(){
    // URL deve ser alterada para o endereço do seu servidor
    // fetch('http://localhost:3000/lanches')
    fetch('https://scaling-parakeet-x5544xgp97xv3vpxr-3000.app.github.dev/lanches')
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
    const section = document.querySelector('section');
        //criando dinamicamente as divs
    lanches.forEach(lanche => {
        const card = document.createElement('div');
        card.classList.add('card');
        const infos = document.createElement('div');
        infos.classList.add('informacoes');
        const produto = document.createElement('div');
        produto.classList.add('produto');
        const preco = document.createElement('div');
        preco.classList.add('preco');
        //criando os elementos internos das divs
        const img = document.createElement('img');
        img.src = `../assets/${lanche.imagem}`;
        const h2 = document.createElement('h2');
        h2.textContent = lanche.nome;
        const pProduto = document.createElement('p');
        pProduto.textContent = lanche.descricao;
        const pPreco = document.createElement('p');
        pPreco.textContent = lanche.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
        const svgImg = document.createElement('img');
        svgImg.src = '../assets/carrinho.svg';
        //adicionando os elementos criados
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