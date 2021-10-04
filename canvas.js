const container = document.querySelector('.container')
let id = 1
let lineWidth = 3
let myColor = 'black'

const goDraw = (moveEvent, context) => {
    myColor = document.querySelector('#color').value
    ctx.lineTo(moveEvent.offsetX, moveEvent.offsetY)
    ctx.lineJoin = 'round'
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = myColor
    ctx.stroke()
}

let ctx

container.addEventListener('mousedown', e => {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', '500px')
    canvas.setAttribute('height', '300px')
    canvas.setAttribute('id', `canvas${id++}`)
    container.appendChild(canvas)
    ctx = canvas.getContext('2d');

    ctx.beginPath();
    let x = e.offsetX
    let y = e.offsetY
    ctx.moveTo(x, y);
    ctx.stroke()

    canvas.addEventListener('mousemove', goDraw)

    container.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', goDraw)
    })


})
let maxId
document.getElementById('undo').addEventListener('click', () => {
    for (let index = 0; index < container.children.length; index++) {
        if (container.children[index].classList.contains('d-none'));
        else {
            maxInd = index
        }
    }
    container.children[maxInd].classList.add('d-none')
});
document.getElementById('redo').addEventListener('click', () => {
    for (let index = 0; index < container.children.length; index++) {
        if (container.children[index].classList.contains('d-none') == false);
        else {
            maxInd = index
        }
    }
    container.children[maxInd].classList.remove('d-none')
});

let thickness = document.querySelector('#thickness')
thickness.oninput = function() {
    lineWidth = this.value * 0.5
}