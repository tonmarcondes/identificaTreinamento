//resgatar variavel de localstorage
const cod = localStorage.getItem('cursoValue')
const desc =  localStorage.getItem('descValue')
const descSub =  localStorage.getItem('descSub')
const instrutor =  localStorage.getItem('instrutor')
const data =  localStorage.getItem('dataAtual')
const turma =  localStorage.getItem('classValue')
const publico =  localStorage.getItem('publico')

window.onload = function() {
    //setar valores nos campos
    document.getElementById('cod').shadowRoot.querySelector('span').innerHTML = cod
    document.getElementById('cod').shadowRoot.querySelector('.subtitle').innerHTML  = turma
    
    document.getElementById('desc').shadowRoot.querySelector('span').innerHTML = desc
    document.getElementById('desc').shadowRoot.querySelector('.subtitle').innerHTML  = descSub
    
    document.getElementById('coach').shadowRoot.querySelector('span').innerHTML = instrutor
    
    document.getElementById('data').shadowRoot.querySelector('span').innerHTML = publico
    document.getElementById('data').shadowRoot.querySelector('.subtitle').innerHTML = data
}

window.onunload = function() {
    
    //destruir variavel de localstorage quando o uauario sair da pagina

localStorage.removeItem('cursoValue')
localStorage.removeItem('descValue')
localStorage.removeItem('descSub')
localStorage.removeItem('instrutorValue')
localStorage.removeItem('dataAtual')
localStorage.removeItem('classValue')

}