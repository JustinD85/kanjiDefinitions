//all kanji desired to learn, Contains Kanji, Definition, Romaji/Hiragana, correct guess/kanji count


let verified = false;
let isProcessing = false;

const container = document.querySelector('.container');
const person = {
	name:"Justin",
	passcode: "0",
	kanji:"水",
	definition:"Water",
	correctKanji: 0,
	correctDefinition: 0	
}
//grabs localContent and converts from string to obj(or w/e it was before)
const accounts = [JSON.parse(localStorage.getItem('accounts'))] || [];

//functions
const elementMaker = (ele, text, optionalClass) => {
	const tempEle = document.createElement(ele);
	tempEle.textContent = text;
	if(optionalClass){
		tempEle.classList.add(optionalClass);
	}
	container.appendChild(tempEle);
	return container.querySelector("." + optionalClass);
}
//checks accounts for username
const checkValueInObj = (k) => {
	for(let e of accounts){
		for(let j in e){
			if(e[j] === k){
				return true;
			}
		}
	}
	return false;
}

//when user press enter for password && username only
const loginProcessor = (e) => {
	var key = e.keyCode;
	if(key === 13){
		if(!isProcessing &&  checkValueInObj(inputBox.value)){
			isProcessing = true;
			textBox.textContent = "What is your passcode?"
			inputBox.value = ""
		}
		else if(isProcessing && inputBox.value === person.passcode){
			verified = true;			
			inputBox.removeEventListener('keypress', loginProcessor);
			inputBox.value = "";
			app();
		}
		else
		{
			inputBox.value = "";
		}
	}
}

const addLocalStorage = (accountsArray)=>{
	localStorage.setItem("accounts", JSON.stringify(accountsArray));
}

//asks name
const inputBox = elementMaker("input", undefined, "inputBox");
const textBox = elementMaker("div","What is your name?","textBox")
//event listener for name
inputBox.addEventListener('keypress', loginProcessor);

const app = () =>{
//ask if new kanji should be learned

//if yes take in new kanji

//else run app
if(verified){
	container.innerHTML = ""
	elementMaker("div", person.kanji, "kanji");
	elementMaker("div", person.definition, "definition");
	elementMaker("canvas", undefined, "canvas");
	
	// container.innerHTML = `<div class="kanji"></div>
	// <div class="definition"></div>`;
// create canvas for drawing
// document.write(`<canvas class="canvas">canvas for drawing </canvas>`);
}
// show a definition

//ask if guess guess was completely correct or which was correct(kanji, definition)

//show kanji, definition, and hiragana/romaji

//check if all kanji have been guess correctly in this loop

//present mastery screen or kanji that needs review
}

