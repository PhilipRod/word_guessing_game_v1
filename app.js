const buttons = document.querySelectorAll('#button');
const phraseUl = document.querySelector('#phrase').firstElementChild;
const startGame = document.querySelector('.btn__reset');
const qwerty = document.querySelector('#qwerty');
let scoreboard = document.querySelector('#scoreboard');
let missed = 0;

let phrases = ["web development", "javascript", "css","html","treehouse"]


// FUNCTION TO RETURN RANDOM PHRASE FROM ARRAY
const getRandomPhraseAsArray = arr => {
    randomNum =Math.floor(Math.random() * arr.length);
    for(let i = 0; i < arr.length; i++){
        return arr[randomNum];
    }  
}
const phrase=getRandomPhraseAsArray(phrases);

// FUNCTION TO add ARRAY OF LETTERS TO DISPLAY
const addPhraseToDisplay = arr => {
    for(let i = 0; i < arr.length; i++){
        currentChar = arr[i]
        const li = document.createElement('li')
        li.textContent = currentChar;
        phraseUl.appendChild(li);
        if(!currentChar.includes(' ')){
            li.classList.add('letter')
        }else{
            li.classList.add('space')
        }
    }
}
addPhraseToDisplay(phrase)

//FUNCTION TO CHECK MATCH
const checkLetter = button => {
    const lis = phraseUl.children;
    let match = null;
    for(let i = 0; i < lis.length; i++){

        if(button.textContent === lis[i].textContent){
            lis[i].classList.add('show');
            match = button.textContent;
        }
        
    }
    return match;
}

const checkWin = ()=>{
  

const li_letter = phraseUl.querySelectorAll('.letter')
const li_show = phraseUl.querySelectorAll('.show')

const start= startGame.parentElement;
    if(li_letter.length===li_show.length){

        start.classList.add('win');
        start.firstElementChild.textContent = 'YOU WON'
        start.style.display='flex'


    }else if(missed > 4){
        start.classList.add('lose')
        start.firstElementChild.textContent='YOU LOST'
        start.style.display='flex'
    }

}



// Listen for start  buuton t be pressed to hide ovearlay or start game
startGame.addEventListener('click', () => {
    const overlay = startGame.parentElement;
    overlay.style.display = 'none';
})

qwerty.addEventListener('click',(e)=>{
    let btn = e.target;
    if(btn.tagName === 'BUTTON' && !btn.classList.contains('chosen')){
        btn.classList.add('chosen');
        let check = checkLetter(btn);
        if(!check){
            tries = scoreboard.firstElementChild;
            tries.removeChild(tries.firstElementChild)
            missed++;
            
        }
        checkWin()
    }
    

})


