(function highlightSupport() {
	const wrapper = document.querySelector('.support__items');
	const items = Array.from(document.querySelectorAll('.support__item')); 

	wrapper.addEventListener('mouseover', (event) => {
		if (event.target.classList.contains('support__item')) {
			for (let i = 0; i < items.length; i++) {
				if(items[i].classList.contains('support__item_active')) {
					items[i].classList.remove('support__item_active');
				}
			}
			event.target.classList.add('support__item_active');
		}
	});
})();

(function highlightServices() {
	const wrapper = document.querySelector('.services__container');
	const items = document.querySelectorAll('.services__item');

	wrapper.addEventListener('mouseover', (event) => {
		if (event.target.classList.contains('services__item')) {
			for (let i = 0; i < items.length; i++) {
				if(items[i].classList.contains('services__item_active')) {
					items[i].classList.remove('services__item_active');
				}
			}
			event.target.classList.add('services__item_active');
		}
	});
})();