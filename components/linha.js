class GeraLinha extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({ mode: 'closed'})
        
        const row = document.createElement('div')
        row.setAttribute('class','row')
        
        const left = document.createElement('div')
        left.setAttribute('class','left')
        
        const right = document.createElement('div')
        right.setAttribute('class','right')

        const center = document.createElement('div')
        center.setAttribute('class','center')

        const text = document.createElement('span')
        text.setAttribute('class','text')
        text.textContent = this.innerHTML
        
        const subtitle = document.createElement('div')
        subtitle.setAttribute('class','subtitle')
        subtitle.textContent = this.getAttribute('subtitle')

        center.appendChild(text)
        center.appendChild(subtitle)

        const style = document.createElement('style')
        style.textContent = `
            .row {
                display: flex;
                justify-content: center;
                margin-bottom: ${this.getAttribute('mb')}px;
                margin-top: ${this.getAttribute('mt')}px;
            }
            .left {
                background-color: ${this.getAttribute('cor')};
                width: 5mm;
                border-top: ${this.getAttribute('btl')}px solid;
                border-right: ${this.getAttribute('brl')}px solid;
                border-bottom: ${this.getAttribute('bbl')}px solid;
                border-left: ${this.getAttribute('bll')}px solid;
                height: ${this.getAttribute('h') || 5}mm;
            }
            .right {
                background-color: ${this.getAttribute('cor')};
                width: 5mm;
                height: ${this.getAttribute('h') || 5}mm;
                border-top: ${this.getAttribute('btr')}px solid;
                border-right: ${this.getAttribute('brr')}px solid;
                border-bottom: ${this.getAttribute('bbr')}px solid;
                border-left: ${this.getAttribute('blr')}px solid;
                height: ${this.getAttribute('h') || 5}mm;
            }
            .center {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: ${this.getAttribute('cor')};
                width: 150mm;
                height: ${this.getAttribute('h') || 5}mm;
            }
            .text {
                text-align: center;
                font-size: ${this.getAttribute('font') || 1.5}em;
                font-weight: 700;
                margin-left: 20px;
            }
            .subtitle {
                text-align: center;
                font-size: ${this.getAttribute('fonts') || 1.3}em;
                font-weight: 400;
                color: #777
            }
        `
        shadow.appendChild(style)
        shadow.appendChild(row)
        row.appendChild(left)
        row.appendChild(center)
        row.appendChild(right)
    }
}

customElements.define('gera-linha',GeraLinha)

const favicon = document.createElement('link')
favicon.setAttribute('rel','shortcut icon')
favicon.setAttribute('href','../src/assets/img/latam.svg')
document.head.appendChild(favicon)

const bootstrap = document.createElement('link')
bootstrap.setAttribute('rel','stylesheet')
bootstrap.setAttribute('href','../node_modules/bootstrap/dist/css/bootstrap.min.css')
document.head.appendChild(bootstrap)

const btImprimir = document.createElement('button')
btImprimir.textContent = 'Imprimir'
btImprimir.setAttribute('class','btn btn-primary')
btImprimir.setAttribute('onclick','window.print()')
document.body.appendChild(btImprimir)