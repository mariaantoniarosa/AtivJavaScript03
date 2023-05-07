function retornaString() {

    nome = document.getElementById("nome").value;
    if (!nome == "") {
        alert(`${"Seja bem-vindo, " + nome}`);
    } else {
        alert(`${"Digite seu nome."}`)
    }
}

function retornaData() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    if ((!dia == "") || (!mes == "") || (!ano == "")) {

        alert(`${dia + " / " + mes + " / " + ano}`)
    } else {
        alert(`${"Digite a data"}`);
    }

}

function retornaObj() {
    var nome = document.getElementById("nome1").value;
    var idade = document.getElementById("idade").value;
    var altura = document.getElementById("altura").value;

    var pessoa = {
        nomePessoa: nome,
        idadePessoa: idade,
        alturaPessoa: altura
    };
    if ((!nome == "") || (!idade == "") || (!altura == "")) {
        alert(`Nome da Pessoa: ${pessoa.nomePessoa} \nIdade: ${pessoa.idadePessoa} \nAltura: ${pessoa.alturaPessoa}`);
    } else {
        alert(`${"Digite suas informações!"}`);
    }
}

const soma = (numeros) => {

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;

    var numeros = [];
    numeros.push(parseInt(n1));
    numeros.push(parseInt(n2));
    numeros.push(parseInt(n3));

    alert(numeros.reduce((total, numero) => total + numero, 0));


}

const somaCaract = (texto) => {
    var text1 = document.getElementById("texto1").value;
    var text2 = document.getElementById("texto2").value;
    var text3 = document.getElementById("texto3").value;
    var texto = [];
    var totalCaracteres = 0;
    texto.push((text1));
    texto.push((text2));
    texto.push((text3));

    for (let i = 0; i < texto.length; i++) {
        totalCaracteres += texto[i].length;

    }
    alert(totalCaracteres)
}

const retornaObjeto = (pessoa2) => {
    var nome = document.getElementById("nome2").value;
    var idade = document.getElementById("idade1").value;
    var altura = document.getElementById("altura1").value;

    var pessoa2 = {
        nomePessoa: nome,
        idadePessoa: idade,
        alturaPessoa: altura

    };

    alert(`Nome da Pessoa: ${pessoa2.nomePessoa} \nIdade:  ${pessoa2.idadePessoa} \nAltura: ${pessoa2.alturaPessoa}`);

}

const retornaJson = () => {

    const pessoa = {
        "nome": "Maria",
        "idade": 20,
        "endereço": "Rua Vasco da Gama"


    };
    const jsonString = JSON.stringify(pessoa, null, 2);
    document.getElementById("jsonOutput").textContent = jsonString;


}

const retornaDescricao = () => {
    const produto = {
        "nome": "Notebook Acer",
        "preco": "R$6.000,00"
    };

    document.getElementById("prod").value = produto.nome;
    var valor = document.getElementById("valor").value = produto.preco;



}


const retornaValor = () => {

    var selecionar = document.getElementById("selecionar").value;

    const valor = [
        { "nome": "notebookAcer", "preco": "R$6.000,00" },
        { "nome": "notebookLenovo", "preco": "R$5.000,00" },
        { "nome": "notebookPositivo", "preco": "R$2.000,00" }
    ]

    for (let i = 0; i < valor.length; i++) {


        const preco = valor[i].preco;
        const nome = valor[i].nome;

        if (selecionar == nome) {
            document.getElementById("valor2").value = preco;
        }
    }
    return valor;

}

const gerarTabela = () => {
    const produtos = [
        { nome: "Produto 1", preco: 10 },
        { nome: "Produto 2", preco: 20 },
        { nome: "Produto 3", preco: 30 }
    ];

    let tabela = "<table>";
    tabela += "<tr><th>Produto</th><th>Preço</th></tr>";

    produtos.forEach((produto) => {
        tabela += `<tr><td>${produto.nome}</td><td>${produto.preco}</td></tr>`;
    });
    tabela += "</table>";

    document.getElementById("tabela1").innerHTML = tabela;
    return produtos;
};

const gerarLista = () => {
    const prod = [

        { nome: "Notebook 1", preco: "1.000.00" },
        { nome: "Notebook 2", preco: "2.000.00" },
        { nome: "Notebook 3", preco: "3.000.00" }
    ];
    let lista = "<ul>";
    prod.forEach((produto) => {
        lista += `<li>${produto.nome} ${produto.preco}</li>`;
    }); lista += "</ul>";
    document.getElementById("lista").innerHTML = lista;
};      