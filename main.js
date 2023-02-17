document.addEventListener("DOMContentLoaded", function(){

const magic = document.getElementById("magic");
const phrases = ["Student...","currently pursuing B.E ....","Keen learner...."];
let letterIndex=0;
let phraseIndex=0;

function printletters(phrase){
    if(letterIndex == phrase.length){
        clearletters();
    }

    else if(letterIndex < phrase.length){
        magic.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function (){
            printletters(phrase)
        }, 175)
    }
}

function clearletters(){
    //if the fiest word has completed, go for next one
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex=0;
        printletters(phrases[phraseIndex])
    }

    else if(letterIndex > -1){
        let updatePhrase = "";
        for(let index=0; index<letterIndex; index++){
            updatePhrase += phrases[phraseIndex].charAt(index);
        }
        // console.log(updatePhrase);
        magic.textContent = updatePhrase;
        letterIndex -= 1;
        setTimeout(clearletters, 100)
    }
}



printletters(phrases[0])


})



