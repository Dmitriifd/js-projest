// const container = document.querySelector('.container')
const board = document.querySelector('#board')
const colors = [
	'#D83A56',
	'#FF616D',
	'#FFEAC9',
	'#548CA8',
	'#EEEEEE',
	'#F3C583',
	'#E99497',
	'#00EAD3',
]
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
    // element.style.boxShadow = `0 0 2px #000`
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(element) {
	const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}