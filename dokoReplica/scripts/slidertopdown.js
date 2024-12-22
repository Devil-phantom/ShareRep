const slides = document.querySelectorAll(".slide");
var counter = 0;


slides.forEach(
    (slides,index) =>{
        slides.style.top = `${index *100}%`;
    }
)

function nextSlide(){

    if (counter == slides.length - 1) {
        counter = 0;
        SlideChange();
    } else {
        counter++;
        SlideChange();
    }

}
function prevSlide(){

    if (counter == 0) {
        counter = slides.length - 1;
        SlideChange();
    } else {
        counter--;
        SlideChange();
    }

}

function SlideChange(){
    slides.forEach(
        (slides)=>{
            slides.style.transform = `translateY(-${counter*100}%)`;
        }
    )
}