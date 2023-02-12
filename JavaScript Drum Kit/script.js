window.addEventListener('keydown', playAudio);
function playAudio(e){     //we are listening on window and the even we are listening is keydown with function(e)
    //console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);     //data selector 
    //console.log(audio);
    
    //working on animation of buttom when it is pressed
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);        //.key is the class in html we used
    if(!audio) return;      //if no key associated with audio stop the function
    key.classList.add('playing');   //using the playing css for effect
    audio.currentTime=0;    //rewind to start so when we click a button multiple times it repeats
    audio.play();   
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;      //we only want to remove the transform feature in .playing
    e.target.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));   //switch of the .playing css

