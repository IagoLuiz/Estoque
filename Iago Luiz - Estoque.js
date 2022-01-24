const prompt = require('prompt-sync')();


function imprimirMenu() {
    console.log()
    console.log('Bem-Vindo a Igarassu_Variedades')
    console.log('Programa De Solucoes Para Estoque')
    console.log('Oque Deseja?')
    console.log('(1) Adicionar produto ao estoque')
    console.log('(2) Busca produto no estoque')
    console.log('(3) Relatório de geral (lista todos os produtos)')
    console.log('(4) Relatório por Marca')
    console.log('(5) Relatório de Marcas')
    console.log('(6) Sobre o Projeto'),
    console.log('(7) Sair')
}

//class produto
class Produto {
    constructor(nome, marca, modelo, cor, preco) {
        this.nome = nome
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.preco = preco
    }
}

//classo estoque
class Estoque {
    constructor(produtos, quantidades) {
        this.produtos = produtos
        this.quantidades = quantidades
    }

    //Criando e Adcionando Produto
    Adicionar_Produto(produto) {
        this.produtos.push(produto)
    }

    Adicionar_Quantidade(quantidade) {

        this.quantidades.push(quantidade)
    }

    //Busca Por Produto
    Buscar_Produto(prodt) {

        let total = 0
        for (var i = 0; i < this.produtos.length; i++) {
            if (prodt == this.produtos[i].nome) {
                console.table(this.produtos[i])
                total++
            }
        }
        console.log(("*Quantidade Total de Produtos: " + total))
    }

    //Relatorio por Marrca
    Buscar_Marca(marca) {

        let total = 0

        for (var i = 0; i < this.produtos.length; i++) {
            if (marca == this.produtos[i].marca) {
                total++
                console.table(this.produtos[i])
            }
        }
        console.log(("*Quantidade Total de Produtos: " + total))
    }

    //relatorio de marcas
    Valor_Total_Por_Marca(marca) {

        let total = 0

        for (var i = 0; i < this.produtos.length; i++) {
            if (marca == this.produtos[i].marca) {
                total += (this.quantidades[i] * this.produtos[i].preco)
                console.table(this.produtos[i])
            }
        }
        console.log("*Valor Total Em Estoque Da Marca " + marca + " é de :")
        console.log((total))
    }
}


//Estoque produtos Existente
let prdt1 = new Produto('Nootbook', 'Dell', 'INSPIRON', 'prateado', 2.651, 00)
let prdt2 = new Produto('Nootbook', 'Dell', 'Gamer G Series', 'Preto', 4.999, 00)
let prdt3 = new Produto('Teclado', 'Dell', 'Teclado Gamer Mecânico Alienware Low Profile RGB AW510K',
    'Preto com luzes coloridas envolta das teclas', 1.194, 00)
let prdt4 = new Produto('Mouse', 'Dell', 'Mouse Gamer RGB Alienware | AW510M',
    'Preto com luzes que alternam na logomarca', 383, 00)
let prdt5 = new Produto('Nootbook', 'Apple', 'MacBook Air', 'Cinza Escuro', 12.999)
let prdt6 = new Produto('Nootbook', 'Apple', 'MacBook Pro de 16 polegadas', 'Cinza Claro', 32.999)
let prdt7 = new Produto('Smartphone', 'Apple', 'iPhone 11', 'Rose', 4.999)
let prdt8 = new Produto('Smartphone', 'Apple', 'iPhone 13', 'Vermelha', 7.599)
let prdt9 = new Produto('Geladeira', 'Consul', 'CRM56HK', 'Branca', 3.499, 00)
let prdt10 = new Produto('Ar-condicionado', 'Consul', 'split 12000 btus', 'Branca', 1.799, 00)
let prdt11 = new Produto('Geladeira', 'Eletrolux', '(DM84X)', 'Metalica', 6.499, 00)
let prdt12 = new Produto('Ar-condicionado', 'Eletrolux', 'Split 18.000 Btus', 'Branca', 2.499, 00)

//Arrays de produtos e quantidades
let estoque = new Estoque([prdt1, prdt2, prdt3, prdt4, prdt5, prdt6,
    prdt7, prdt8, prdt9, prdt10, prdt11, prdt12],
    [123, 132, 156, 188, 321, 511, 381, 181, 681, 891, 981, 181,])

//Criando e Adcionando Produto
function criar_Produto() {
    console.log()
    let produto = prompt('Nome do Produto: ')
    let marca = prompt('Nome da Marca: ')
    let modelo = prompt('Modelo: ')
    let cor = prompt('Cor: ')
    let preco = Number(prompt('Valor do Produto: '))
    let quantidade = Number(prompt('Quantidade a ser Armazenada: '))

    const novo_produto = new Produto(produto, marca, modelo, cor, preco)
    const nova_quantidade = quantidade

    estoque.Adicionar_Produto(novo_produto)
    estoque.Adicionar_Quantidade(nova_quantidade)
}
console.log()

//Busca Por Produto
function Por_Produto() {

    let produto = (prompt('Digite o Produto Desejado:  '))

    estoque.Buscar_Produto(produto)
}

//Relatorio Geral (Lista Do Estoque)
function meu_estoque() {
    console.log()
    console.table(estoque.produtos)
    console.table(estoque)
}

//Busca Por Marca
function Por_Marca() {

    let marca = (prompt('Digite a Marca Desejada: '))

    estoque.Buscar_Marca(marca)

}

//Valor Total Por Marca
function Valor_Marca() {

    let marca = (prompt('Digite a Marca Desejada: '))

    estoque.Valor_Total_Por_Marca(marca)

}

//Sobre o Projeto
function sobre() {
    console.log("Instituto Federal de Educacao, Ciencia e Tecnologia - IFPE")
    console.log("Curso: Informatica para Internet")
    console.log("Componentes Curriculares: Logica de Programacao e Estrutura de Dados | Introducao a Programacao Imperativa")
    console.log("Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br")
    console.log("Aluno: Iago Luiz Pessoa Do Nascimento - ilpn@discente.ifpe.edu.br")
    console.log("Progeto entregue na respectiva data 24/01/2022")
    console.log("Since Program 24/01/2022")
    console.log("feito para facilitar a busca de nossos queridos clientes")
    console.log("Obrigado por fazer parte da Familia Igarassu_Variedades")
    console.log("Divirtase No Estoque")
}


// Menu
var opcao = -1

do {

    imprimirMenu()

    opcao = Number(prompt('Digite uma opção: '))

    switch (opcao) {
        case 1:
            criar_Produto()
            break
        case 2:
            Por_Produto()
            break
        case 3:
            meu_estoque(estoque)
            break
        case 4:
            Por_Marca()
            break
        case 5:
            Valor_Marca()
            break
        case 6:
            sobre()
            break
    }

} while (opcao != 7)