
let txtCode = document.querySelector("#code-editor");
let lblLines = document.querySelector("#line-numbers");
let divCodeArea = document.querySelector("#id-code-area");

// divCodeArea.addEventListener("")

txtCode.addEventListener("input", updateLineNumbers);

function updateLineNumbers() {
	let lines = txtCode.value.split("\n").length;
	console.log(lines);
	lblLines.value = "";
	for(let i = 1; i < (lines + 1); i++) {
		lblLines.value += "" + i + '\n'; 
	}
}

updateLineNumbers();

txtCode.addEventListener("scroll", () => {
  lblLines.scrollTop = txtCode.scrollTop;
});