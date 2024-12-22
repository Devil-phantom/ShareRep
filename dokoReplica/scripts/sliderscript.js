const slides = document.querySelectorAll(".slide");
var counter = 0;
let intervalId = null;

slides.forEach(
    (slides,index) =>{
        slides.style.left = `${index *100}%`;
    }
)
interval();
function interval(){
    intervalId = setInterval(nextSlide,6000);
}


function nextSlide(){
    clearInterval(intervalId);
    if (counter == slides.length - 1) {
        counter = 0;
        SlideChange();
    } else {
        counter++;
        SlideChange();
    }
    interval();
}
function prevSlide(){
    clearInterval(intervalId);
    if (counter == 0) {
        counter = slides.length - 1;
        SlideChange();
    } else {
        counter--;
        SlideChange();
    }
    interval();
}

function SlideChange(){
    slides.forEach(
        (slides)=>{
            slides.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}