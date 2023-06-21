var buttons = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "plus", "minus", "divide", "multiply", "dot", "ER"]

let znak
for (let i = 0; i<buttons.length; i++){
	if (i<=9){
		document.getElementById("kalkulator")
		.innerHTML+=`<div class="btn" onclick="add('${i}')" id="${buttons[i]}"></div>`
		document.getElementById(buttons[i])
		.innerHTML += `<p>${i}</p>`
		continue
	} else if (i<=13){
		//I just tries to understadt dont kill me plz
		znak = {plus:"+", minus:"-", multiply:"×", divide:"÷"}[buttons[i]]
	} else if (i==14) {
		znak = "."
	} else if (i==15){
		znak = "E"
	} else {
		console.log("how")
	}
	document.getElementById("kalkulator")
	.innerHTML+=`<div class="btn" onclick="add('${buttons[i]}')" id="${buttons[i]}"></div>`
	document.getElementById(buttons[i])
	.innerHTML += `<p>${znak}</p>`
}

var vvod1 = ""
var vvod = ""
function main(){
	if (vvod1!=vvod){
		vvod1=vvod
		try{
			if (!(eval(vvod)==undefined)){
				document.getElementById("history")
				.innerHTML+="<p>"+eval(vvod)+"</p>"
			}
		} catch (e){
			console.log("Хорошо, что это сундуки сверху остались")
		}
	}
	try{
		if (eval(vvod) == undefined) throw new Error("govno")
		document.getElementById("result")
		.innerHTML = '<p id="resTxt">'+vvod+"="+eval(vvod)+"</p>"
	} catch (e) {
		document.getElementById("result")
		.innerHTML = '<p id="resTxt">'+vvod+"</p>"
	}
}

setInterval(main, 100)

function eraseLast(arg){
	let res = ""
	for (let i = 0; i<arg.length-1; i++){
		res+=arg[i]
	}
	return res
}

function add(arg){
	if (String(arg) in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]){
		vvod+=arg
	} else {
		if (arg=="plus") vvod+="+"
		if (arg=="minus") vvod+="-"
		if (arg=="multiply") vvod+="*"
		if (arg=="divide") vvod+="/"
		if (arg=="dot") vvod+="."
		if (arg=="ER") vvod = eraseLast(vvod)
	}
}