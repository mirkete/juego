const canvas = document.getElementById("canvas")

function createCircle(cte, x, y, radius){
    cte.fillStyle = "rgb(0,0,0)"

    cte.beginPath()
    cte.arc(x, y, radius, 0, 2* Math.PI, true)
    cte.fill()
}

const dados = {
    1: (cte) => {
        createCircle(cte, 100, 100, 50)
    },
    2: (cte) => {
        createCircle(cte, 60, 60, 30)
        createCircle(cte, 140, 140, 30)
    },
    3: (cte) => {
        createCircle(cte, 50, 50, 20)
        createCircle(cte, 100, 100, 20) 
        createCircle(cte, 150, 150, 20)
    },
    4: (cte) => {
        createCircle(cte, 50, 50, 20)
        createCircle(cte, 150, 50, 20)
        createCircle(cte, 50, 150, 20)
        createCircle(cte, 150, 150, 20)
    },
    5: (cte) => {
        createCircle(cte, 50, 50, 20)
        createCircle(cte, 150, 50, 20)
        createCircle(cte, 50, 150, 20)
        createCircle(cte, 150, 150, 20)
        createCircle(cte, 100, 100, 20)    
    },
    6: (cte) => {
        createCircle(cte, 60, 40, 20)
        createCircle(cte, 140, 40, 20)
        createCircle(cte, 60, 100, 20)
        createCircle(cte, 140, 100, 20)
        createCircle(cte, 60, 160, 20)
        createCircle(cte, 140, 160, 20)
    }
}

function draw(){
    const cte = canvas.getContext("2d")
}

setTimeout(draw, 0)