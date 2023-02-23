const preloader = document.querySelector(".preloader"); //Access the preloader div element

//Load the Preloader
window.addEventListener("load", () => {
    preloader.style.zIndex = "-999";
});

const carousel = document.querySelector('.carousel'), //Access the carousel box
    firstImage = carousel.querySelectorAll('video')[0], //Access the first slide
    arrowIcons = document.querySelectorAll('.wrapper i'); //Access the prev and next icons

let isDragStart = false, prevPageX, prevScrollLeft;


const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImage.clientWidth + 14; // getting first image width and adding 14 margin value
        // If clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); //calling showHideIcons after 60ms
    });
});

const dragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //scrollling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

carousel.addEventListener("mouseleave", dragStop);


//Video Plays on Hover and Stops otherwise
videos = carousel.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });
});

videos.forEach(video => {
    video.addEventListener("mouseleave", () => {
        video.pause();
    });
});

