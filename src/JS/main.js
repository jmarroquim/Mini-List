

// A parte logica do meu projeto.
// Variaveis


let inputNome = document.querySelector('#txt-nome')   // pegar o valor do input txt-name
let inputIdade = document.querySelector('#txt-idade')  // pegar o valor do input txt-idade
let lista = document.querySelector('#lista')
let botao = document.querySelector('#btnAdd')

let pessoas = []


// Clique do Botao, cria objeto e faz push
botao.addEventListener('click', function () {



    let nome = inputNome.value              // Pega apenas o valor
    let idade = Number(inputIdade.value)    // Pega apenas o valor e converte em numero


    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].nome === nome) {
            alert('Nome Existente')
            return
        }
    }

    if (nome === "" || idade <= 0) {            // Verifica se o nome esta vazio no INPUT ou se a idade é 0
        alert("Preecha os campos devidamente")
        return
    }

    let pessoa = {              //corre o Objeto
        nome: nome,
        idade: idade
    }





    pessoas.push(pessoa)             // Adiciona as pessoas ao Array
    renderizar()                    // Mostrar os dados no Interface
    inputNome.value = ""
    inputIdade.value = ""




})


function renderizar() {

    lista.innerHTML = ""

    for (let i = 0; i < pessoas.length; i++) {



        lista.innerHTML += '<div>' + pessoas[i].nome + " - " + pessoas[i].idade + " Euros " + '<button onclick="remover(' + i + ')"> Remover </button> ' + '</div>'




    }


}


function remover(indice) {

    pessoas.splice(indice, 1) //começa na posição indice. remove 1 item

    renderizar()  // Depois de remover do array precisamos desenhar a lista outra vez. adicionando function rederizar()
}



