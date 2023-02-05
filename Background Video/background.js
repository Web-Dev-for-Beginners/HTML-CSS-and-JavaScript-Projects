const btn=document.querySelector(".btn"); //Access the button element
const video=document.querySelector(".background"); //Access the video element
const fa=document.querySelector(".fa-solid"); //Access the icon element
const preloader = document.querySelector(".preloader"); //Access the preloader div element

btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause"); //Make the video play on clicking
        video.play(); //Play the video
        fa.classList.add("fa-pause");  //Add Pause Icon
        fa.classList.remove("fa-play"); //Remove Play Icon
    }else{
        btn.classList.add("pause"); //Make the video pause on clicking
        video.pause(); //Pause the video
        fa.classList.remove("fa-pause"); //Remove Pause Icon
        fa.classList.add("fa-play"); //Add Play Icon
    }
});

//Load the Preloader
window.addEventListener("load", () => {
    preloader.style.zIndex = "-999";
  });