let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line'),
	  next = document.querySelector('.btn-next'),
	  prev = document.querySelector('.btn-prev');


const nextSlide = function(){
	offset = offset + 1010;
	if (offset > 2020) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';	
};

const prevSlide = function(){
	offset = offset - 1010;
	if (offset < 0) {
		offset = 2020;
	}
	sliderLine.style.left = -offset + 'px';	
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
