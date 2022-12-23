const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
    
    
]



const carouselElement = document.querySelector('.carousel');




for (let index = 0; index < images.length; index++) {
   

    carouselElement.innerHTML +=`<div class="slide">
                                    <img src= "${images[index]}"
                                 </div>` ;
}



const allSlides = document.querySelectorAll('.slide');
console.log('allSlides', allSlides);


allSlides[0].classList.add('current');

let currentSlide = 0;




