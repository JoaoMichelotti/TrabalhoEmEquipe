const btnAdicionar = document.getElementById('btnAdicionar');
const input = document.getElementById('novoItem');
const lista = document.getElementById('lista');
let contador = document.getElementById('contador');

let total = 0;
let resultado = ""


// Funcionalidade 1: adicionar item
btnAdicionar.addEventListener('click', () => {
  // Criar elemento <li> com texto do input e botões
  // Atualizar contador
    total += 1
    resultado += `
    <div id="bloco_DVD${total}" >
        <li>
            ${input.value}
        </li>
        <button type="button" onclick="marcarImportante('bloco_DVD${total}')">Marcar importante</button>
        <button type="button" onclick="removerItem('bloco_DVD${total}')">❌</button>
    </div>    
    
    `
    contador.innerHTML = `${total}`
    lista.innerHTML = resultado
});

// Funcionalidade 2: marcar como importante
function marcarImportante(botao) {
  // Alternar classe .importante no <li>
 
}

// Funcionalidade 3: remover item
function removerItem(botao) {
  let item = document.getElementById(botao)

  item.remove()
  atualizarContador()

}

// Funcionalidade 4: atualizar contador
function atualizarContador() {
  // Atualizar o texto do contador


}


