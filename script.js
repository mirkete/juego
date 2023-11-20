const canvas = document.getElementById("canvas")
const botonTirar = document.getElementById("boton-tirar")

function crearCirculo (cte, x, y, radius) {
    cte.fillStyle = "#222222"

    cte.beginPath()
    cte.arc(x, y, radius, 0, 2 * Math.PI, true)
    cte.fill()
}

function crearMultiplesCirculos (cte, listaCentros, radio) {
    for (let centro of listaCentros) {
        crearCirculo(cte, centro.x, centro.y, radio)
    }
}

class CanvasAdmin {
    cte = null

    static renderizar = () => {
        this.cte = canvas.getContext("2d")
    }

    static mostrarDado = (numero) => {
        this.cte.fillStyle = "#fff"
        this.cte.fillRect(0, 0, 200, 200)
        dados[numero](this.cte)
    }
}


const dados = {
    1: (cte) => {
        const centrosCirculos = [{ x: 100, y: 100 }]
        crearMultiplesCirculos(cte, centrosCirculos, 50)
    },
    2: (cte) => {
        const centrosCirculos = [
            { x: 60, y: 60 },
            { x: 140, y: 140 }
        ]
        crearMultiplesCirculos(cte, centrosCirculos, 30)
    },
    3: (cte) => {
        const centrosCirculos = [
            { x: 50, y: 50 },
            { x: 100, y: 100 },
            { x: 150, y: 150 }
        ]
        crearMultiplesCirculos(cte, centrosCirculos, 20)
    },
    4: (cte) => {
        const centrosCirculos = [
            { x: 50, y: 50 },
            { x: 150, y: 50 },
            { x: 50, y: 150 },
            { x: 150, y: 150 }
        ]
        crearMultiplesCirculos(cte, centrosCirculos, 20)
    },
    5: (cte) => {
        const centrosCirculos = [
            { x: 50, y: 50 },
            { x: 150, y: 50 },
            { x: 50, y: 150 },
            { x: 150, y: 150 },
            { x: 100, y: 100 }
        ]
        crearMultiplesCirculos(cte, centrosCirculos, 20)
    },
    6: (cte) => {
        const centrosCirculos = [
            { x: 60, y: 40 },
            { x: 140, y: 40 },
            { x: 60, y: 100 },
            { x: 140, y: 100 },
            { x: 60, y: 160 },
            { x: 140, y: 160 }
        ]
        crearMultiplesCirculos(cte, centrosCirculos, 20)
    }
}

botonTirar.addEventListener("click", (e) => {
    const numeroDeDado = Math.round((Math.random() * 5) + 1) //entre 1 y 6
    // renderizar(numeroDeDado)
    CanvasAdmin.mostrarDado(numeroDeDado)
})

window.setTimeout(CanvasAdmin.renderizar, 0)