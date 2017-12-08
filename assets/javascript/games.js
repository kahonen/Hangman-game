   var words =  ["blanche", "dorothy", "rose", "sophia", "confidant", "shady pines", "friend", "sicily", "miami", "friendship", "humor", "sarcasm",];
   var CurrentWord = "";
   var letterInCurrentWord = [];
   var emptyWord = 0;
   var userInput = [];
   var lettersGuessed = [];
   var guessesLeft = 9;
   
   function play(){
	
	var audio = document.getElementById("audio");
    audio.play();
 }

   function startGame(){
   
   lettersGuessed = [];
   guessesLeft = 9;
   userInput = [];
   
   
   CurrentWord = words[Math.floor(Math.random() * words.length)];
   letterInCurrentWord = CurrentWord.split("");
   emptyWord = letterInCurrentWord.length;
   
   for(var i = 0; i < emptyWord; i++){
	   userInput.push("_");
   }
   console.log(userInput);
   document.getElementById('word-blank').innerHTML = userInput.join(" ");
   document.getElementById("guesses-left").innerHTML = guessesLeft;
   
   }
   
   function reviewLetters(letter){
   
	   var letterInWord = false;
   
	   for(var i = 0; i < emptyWord; i++){
		   if(CurrentWord[i] === letter){
			   letterInWord = true;
		   }
	   }
   
	   if(letterInWord){
		   for(i = 0; i < emptyWord; i++){
			   if(CurrentWord[i] === letter){
			   userInput[i] = letter;
		   }
		   }
	   }else{
		   guessesLeft --;
		   lettersGuessed.push(letter)
	   }
   }
   
   function roundComplete(){
   
	   document.getElementById('word-blank').innerHTML = userInput.join(" ");
	   document.getElementById('guesses-left').innerHTML = guessesLeft;
	   document.getElementById('wrong-guesses').innerHTML = lettersGuessed.join(" ");
   
	   if (emptyWord == CurrentWord){
		alert("You Win! Thank You for Being a Friend");
		wins++;
		startGame(); 

	   }else if(guessesLeft === 0){
		   document.getElementById('wrong-guesses').innerHTML = "";
		   alert("You just lost!");        
		   startGame();
	   }
   }
   startGame();
   document.onkeyup = function(event){
	   
	   var letterInput = String.fromCharCode(event.keyCode).toLowerCase();
	   reviewLetters(letterInput)
	   roundComplete();
   }