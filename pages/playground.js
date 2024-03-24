
let txtCode = document.querySelector('#code-editor')
let lblLines = document.querySelector('#line-numbers')
let btnRun = document.querySelector('.run')
let btnStop = document.querySelector('.stop')
let divContainer = document.querySelector('.console-window')

function updateLineNumbers() {
	let lines = txtCode.value.split('\n').length
	console.log(lines)
	lblLines.value = ""
	for(let i = 1; i < (lines + 1); i++) {
		lblLines.value += "" + i + '\n'
	}
}

updateLineNumbers()

txtCode.addEventListener('input', updateLineNumbers)

txtCode.addEventListener('scroll', () => {
  lblLines.scrollTop = txtCode.scrollTop
})
txtCode.addEventListener('keydown', function(e) {
	if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 1;
  }
})

btnRun.addEventListener('mouseover', () => {
	btnRun.style.backgroundColor = '#00720a'
})
btnRun.addEventListener('mouseout', () => {
	btnRun.style.backgroundColor = '#00920d'
})
btnStop.addEventListener('mouseover', () => {
	btnStop.style.backgroundColor = '#b30000'
})
btnStop.addEventListener('mouseout', () => {
	btnStop.style.backgroundColor = '#d40000'
})
btnRun.addEventListener('mousedown', () => {
	btnRun.style.transform = 'scale(0.98, 0.98)'
})
btnRun.addEventListener('mouseup', () => {
	btnRun.style.transform = 'scale(1, 1)'
})
btnStop.addEventListener('mousedown', () => {
	btnStop.style.transform = 'scale(0.98, 0.98)'
})
btnStop.addEventListener('mouseup', () => {
	btnStop.style.transform = 'scale(1, 1)'
})

function experiment() {
	console.log(divContainer.style.cursor)
}

experiment()
