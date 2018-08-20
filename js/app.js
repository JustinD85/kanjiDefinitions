//all kanji desired to learn, Contains Kanji, Definition, Romaji/Hiragana, correct guess/kanji count

/*
	HOT#### REALLY NEED TO SETUP NODE ON RASPBERRY PI BEFORE END OF WEEK FOR PULLING DATA!!!!###
*/
let verified = false;
const container = document.querySelector('.container');
const person = {
	name:"",
	status:{
		kanji:"水",
		definition:"Water",
		correctKanji: 0,
		correctDefinition: 0
	}	
}


//asks name
container.innerHTML += `<span class="login">What is your name:</span> <input type="text" class ="centerMe" name="userName">`;
container.addEventListener('keypress', (e) => {
	var key = e.keyCode;
	if(key === 13 && container.firstElementChild.nextElementSibling.value == "Justin"){
		container.querySelector(".login").textContent = "what is your password"
		container.firstElementChild.nextElementSibling.value = ""
	}
		
	}
) 

// if name in database, ask password
console.log(` What is your password?`)
//rPword = readLine();
//if password correct, load arraySave from their people obj
//if(rPword !== "pword"){ exit()}
//ask if new kanji should be learned

//if yes take in new kanji

//else run app
if(verified){
container.innerHTML = `<div class="kanji"></div>
		<div class="definition"></div>`
// create canvas for drawing
document.write(`<canvas class="canvas">canvas for drawing </canvas>`);
}
// show a definition

//ask if guess guess was completely correct or which was correct(kanji, definition)

//show kanji, definition, and hiragana/romaji

//check if all kanji have been guess correctly in this loop

//present mastery screen or kanji that needs review