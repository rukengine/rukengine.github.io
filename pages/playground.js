
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
let divConsole = document.querySelector('#console-interface')
let divOutput = document.querySelector('#output-interface')
let divWorkArea = document.querySelector('.work-area')
let divTerminalStack = document.querySelector('#terminal-stack')
let inpTerminalInput = document.querySelector('#terminal-input')
let divConsoleStack = document.querySelector('#console-stack')
let inpConsoleInput = document.querySelector('#console-input')
let divOutputSlate = document.querySelector('#output-slate')

let currentLanguage = ''
let currentWindow = ''

let devtestmode = true
let cleanmode = true
let debugprint = false

const	primary_color = '#001b3a'
const	secondary_color = '#001c57'
const	teritiary_color = '#00316e'
const	selected_color = '#001540'
const unselected_color = '#00224b'

body_onload()
updateLineNumbers()

function btnRun_Clicked() {
	if(currentLanguage != 'test') {
		console.log('# ERROR # Please Select the Language \'Testing\'')
		return
	}
	switchWindow('output')
}

function body_onload() {
	if(cleanmode) {
		clearCode()
		clearTerminal()
		clearConsole()
		clearOutput()
	}
	setLanguage('riva')
	switchWindow('terminal')
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
		otherRdBtns[i].style.color = '#888888'
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
		otherRdBtns[i].style.color = '#888888'
	}
}
function switchWindow(window) {
	setWindowTab(window)
	let currentWindowDiv = windowDiv(window)
	debug_print(currentWindowDiv)
	let otherWindowDivs = windowDivs(window)
	for(let i = 0; i < otherWindowDivs.length; i++) {
		let otherWindowDiv = otherWindowDivs[i]
		otherWindowDiv.style.visibility = 'hidden'
		otherWindowDiv.style.height = '0px'
		otherWindowDiv.style.width = '0px'
	}
	currentWindowDiv.style.visibility = 'visible'
	currentWindowDiv.style.height = '100%'
	currentWindowDiv.style.width = '100%'
	divWorkArea.style.backgroundColor = windowBackgroundColor(window)
	windowFocus(window)
	currentWindow = window
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
function windowDiv(win) {
	switch(win) {
	case 'terminal' : return divTerminal
	case 'console' : return divConsole
	case 'output' : return divOutput
	default : return ''
	}
}
function windowDivs(win) {
	switch(win) {
	case 'terminal' : return [divConsole, divOutput]
	case 'console' : return [divTerminal, divOutput]
	case 'output' : return [divTerminal, divConsole]
	default : return ''
	}
}
function windowBackgroundColor(window) {
	switch(window) {
	case 'terminal' : return unselected_color
	case 'console' : return '#000000'
	case 'output' : return selected_color
	default : return ''
	}
}

function clearCode() {
	txtCode.value = ""
}
function clearTerminal() {
	divTerminalStack.innerHTML = '&rukengine-v1.0.0 @ ' + currentDateTime()
	inpTerminalInput.value = '$: ' 
}
function clearConsole() {
	divConsoleStack.innerHTML = ''
	inpConsoleInput.value = ''
}
function clearOutput() {
	divOutputSlate.innerHTML = ''
}

function updateLineNumbers() {
	let lines = txtCode.value.split('\n').length
	lblLines.value = ""
	for(let i = 1; i < (lines + 1); i++) {
		lblLines.value += "" + i + '\n'
	}
}

function windowFocus(window) {
	switch(window) {
	case 'terminal' : terminalFocus(); return
	case 'console' : consoleFocus(); return
	default : return
	}
}
function terminalFocus() {
	inpTerminalInput.focus()
	inpTerminalInput.selectionStart = inpTerminalInput.selectionEnd = inpTerminalInput.value.length
}
function consoleFocus() {
	inpConsoleInput.focus()
	inpConsoleInput.selectionStart = inpConsoleInput.selectionEnd = inpConsoleInput.value.length
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
	btnRun_Clicked()
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
	switchWindow('terminal')
})
rdConsole.addEventListener('click', () => {
	switchWindow('console')
})
rdOutput.addEventListener('click', () => {
	switchWindow('output')
})
divTerminal.addEventListener('click', () => {
	windowFocus('terminal')
})
inpTerminalInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter' || e.keyCode === 13) {
		console.log('[Enter] key pressed in the Terminal Input')
	}
	if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + 1;
  }
})

function currentDateTime() {
	let cur = new Date()
	return '' + cur.getDate() + '-' + (cur.getMonth()+1) + '-' + cur.getFullYear() + ' | ' + cur.getHours() + ':' + cur.getMinutes() + ':' + cur.getSeconds()
}

function debug_print(data) {
	if(debugprint) {
		console.log(data)
	}
}