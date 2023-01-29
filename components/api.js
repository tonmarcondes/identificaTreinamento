const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
    window = new BrowserWindow({
        
    })
})

fetch('../swap.json').then((response) => {
    response.json().then((dados) => {
        dados[0].instrutores.map((instrutor) => {
            // console.log(instrutor.nome);
            
            let select = document.querySelector('#instrutor')
            let option = document.createElement('option')
            option.setAttribute('value',instrutor.nome)
            option.textContent = instrutor.nome
            select.appendChild(option)
        })
    })
})

fetch('../swap.json').then((response) => {
    response.json().then((dados) => {
        dados[1].cursos.map((curso) => {
            console.log(curso)
            
            let select = document.querySelector('#curso')
            let option = document.createElement('option')
            let desc = document.querySelector('#desc')
            // option.getAttribute
            option.setAttribute('value',curso.cod)
            desc.setAttribute('value',curso.curso)
            option.textContent = curso.cod
            select.appendChild(option)
        })
    })
})

const favicon = document.createElement('link')
favicon.setAttribute('rel','shortcut icon')
favicon.setAttribute('href','../src/assets/img/latam.svg')
document.head.appendChild(favicon)

const bootstrap = document.createElement('link')
bootstrap.setAttribute('rel','stylesheet')
bootstrap.setAttribute('href','../node_modules/bootstrap/dist/css/bootstrap.min.css')
document.head.appendChild(bootstrap)