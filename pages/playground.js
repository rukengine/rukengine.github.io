
let txtCode = document.querySelector('#code-editor')
let lblLines = document.querySelector('#line-numbers')
let btnRun = document.querySelector('.run')
let btnStop = document.querySelector('.stop')
let divContainer = document.querySelector('.console-window')
let rdRiva = document.querySelector('.language.riva')
let rdAlgoc = document.querySelector('.language.algoc')
let rdComin = document.querySelector('.language.comin')
let rdEssembl = document.querySelector('.language.essembl')
let rdTest = document.querySelector('.language.test')
let rdTerminal = document.querySelector('.tabs.terminal')
let rdConsole = document.querySelector('.tabs.console')
let rdOutput = document.querySelector('.tabs.output')
let divTerminal = document.querySelector('#terminal-interface')
let divConsole = document.querySelector('#conosle-interface')
let divOutput = document.querySelector('#output-interface')

let currentLanguage = ''
let currentWindow = ''

let devtestmode = true
let cleanmode = true
let debugprint = false

const	primary_color = '#001b3a';
const	secondary_color = '#001c57';
const	teritiary_color = '#00316e';
const	selected_color = '#001540';

body_onload()
updateLineNumbers()

function body_onload() {
	debug_print(rdRiva)
	if(cleanmode) {
		clearCode()
	}
	setLanguage('riva')
	setWindowTab('console')
}

function setLanguage(lang) {
	let currentRdBtn = languageRdBtn(lang)
	debug_print(currentRdBtn)
	currentRdBtn.style.backgroundColor = secondary_color
	currentRdBtn.style.color = '#ffffff'
	let otherRdBtns = languageRdBtns(lang)
	debug_print(otherRdBtns)
	for(let i = 0; i < otherRdBtns.length; i++) {
		otherRdBtns[i].style.backgroundColor = teritiary_color
		otherRdBtns[i].style.color = '#aaaaaa'
	}
	currentLanguage = lang
}
function setWindowTab(tab) {
	let currentRdBtn = windowTabRdBtn(tab)
	debug_print(currentRdBtn)
	currentRdBtn.style.backgroundColor = secondary_color
	currentRdBtn.style.color = '#ffffff'
	let otherRdBtns = windowTabRdBtns(tab)
	debug_print(otherRdBtns)
	for(let i = 0; i < otherRdBtns.length; i++) {
		otherRdBtns[i].style.backgroundColor = teritiary_color
		otherRdBtns[i].style.color = '#aaaaaa'
	}
	currentWindow = 'console'
}

function languageRdBtn(lang) {
	switch(lang) {
	case 'riva' : return rdRiva
	case 'algoc' : return rdAlgoc
	case 'comin' : return rdComin
	case 'essembl' : return rdEssembl
	case 'test' : return rdTest
	default : return ''
	}
}
function languageRdBtns(lang) {
	switch(lang) {
	case 'riva' : return [rdAlgoc, rdComin, rdEssembl, rdTest] 
	case 'algoc' : return [rdRiva, rdComin, rdEssembl, rdTest] 
	case 'comin' : return [rdRiva, rdAlgoc, rdEssembl, rdTest]
	case 'essembl' : return [rdRiva, rdAlgoc, rdComin, rdTest]
	case 'test' : return [rdRiva, rdAlgoc, rdComin, rdEssembl]
	default : return ''
	}
}
function windowTabRdBtn(tab) {
	switch(tab) {
	case 'terminal' : return rdTerminal
	case 'console' : return rdConsole
	case 'output' : return rdOutput
	default : return ''
	}
}
function windowTabRdBtns(tab) {
	switch(tab) {
	case 'terminal' : return [rdConsole, rdOutput]
	case 'console' : return [rdTerminal, rdOutput]
	case 'output' : return [rdTerminal, rdConsole]
	default : return ''
	}
}

function clearCode() {
	txtCode.value = ""
}

function updateLineNumbers() {
	let lines = txtCode.value.split('\n').length
	lblLines.value = ""
	for(let i = 1; i < (lines + 1); i++) {
		lblLines.value += "" + i + '\n'
	}
}

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
rdRiva.addEventListener('click', () => {
	setLanguage('riva')
})
rdAlgoc.addEventListener('click', () => {
	setLanguage('algoc')
})
rdComin.addEventListener('click', () => {
	setLanguage('comin')
})
rdEssembl.addEventListener('click', () => {
	setLanguage('essembl')
})
rdTest.addEventListener('click', () => {
	setLanguage('test')
})
rdTerminal.addEventListener('click', () => {
	setWindowTab('terminal')
})
rdConsole.addEventListener('click', () => {
	setWindowTab('console')
})
rdOutput.addEventListener('click', () => {
	setWindowTab('output')
})

function debug_print(data) {
	if(debugprint) {
		console.log(data)
	}
}