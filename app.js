let listaAmigos = [];

function adicionarAmigo() {
    let amigos = document.querySelector("amigo");

    if (amigos == "" && !listaAmigos.includes(amigos)){
        alert("INVÁLIDO! Insira um nome válido." ); 
    } else{        
        listaAmigos.push(amigos);

    atualizarLista();
    }
}
function atualizarLista () {
    let lista = document.querySelector(novaLista);
    lista.innertHTML = "";

    listaAmigos.forEach((nome) => {
        let item = document.createElement ("novo");
        item.textContent = nome;
        lista.appendChild (item);
    })
   }
function sortearAmigo(){
    let sorteio = Math.floor(Math.random() * listaAmigos.length);
    let sorteado = listaAmigos[sorteio];
    let resultado = document.querySelector("resultado");
    resultado.innertHHTML = `<novo> O amigo nome sorteado foi: <strong>${sorteado}<strong></novo>`;
    }
