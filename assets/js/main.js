new Swiper('.villa__slider', {
	slidesPerView: 2,
	spaceBetween: 13,

	navigation: {
		nextEl: '.villa__slider-button.swiper-button-next',
		prevEl: '.villa__slider-button.swiper-button-prev',
	},

	breakpoints: {
		824: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});

const buttonsForPopUpOpen = document.querySelectorAll('.button[data-pop-up]'),
	buttonBurgerMenu = document.querySelector('.header__button-burger'),
	popUp = document.querySelector('.pop-up'),
	menuOverlay = popUp.querySelector('.menu-overlay'),
	registerYourInterestForm = popUp.querySelector('.register-interests-form'),
	popUpButtonClose = document.querySelector('.pop-up__button-close');

function onClosingBlocksPopUp() {
	const blocks = popUp.querySelectorAll('.pop-up__blocks > *');

	blocks.forEach(block => block.classList.add('pop-up__block-hidden'));
}

function onOpenPopUp(event) {
	event.stopPropagation();

	document.body.style.overflow = 'hidden';

	onClosingBlocksPopUp();

	popUp.classList.add('pop-up--active');
}

function onClosePopUp() {
	onClosingBlocksPopUp();

	document.body.style.overflow = '';

	popUp.classList.remove('pop-up--active');
}

function onClosingPopUpWithoutClick(event) {
	if (!event.target.closest('.pop-up__body')) {
		onClosingBlocksPopUp();

		document.body.style.overflow = '';

		onClosePopUp();
	}
}

function onOpenPopUpRegisterYourInterestForm(event) {
	onOpenPopUp(event);

	registerYourInterestForm.classList.remove('pop-up__block-hidden');
}

function onOpenPopUpMobileOverlay(event) {
	onOpenPopUp(event);

	menuOverlay.classList.remove('pop-up__block-hidden');
}

buttonsForPopUpOpen.forEach(button => {
	button.addEventListener('click', onOpenPopUpRegisterYourInterestForm);
});

buttonBurgerMenu.addEventListener('click', onOpenPopUpMobileOverlay);

popUpButtonClose.addEventListener('click', onClosePopUp);

document.addEventListener('click', onClosingPopUpWithoutClick);

const villaAccordionItems = document.querySelector('.villa__items');

function onToggleAccordionItem(event) {
	if (event.target.closest('.villa__item-top')) {
		const item = event.target.closest('.villa__item');
		const body = item.querySelector('.villa__item-body');

		if (body.style.height) {
			body.style.height = '';
		} else {
			body.style.height = `${body.scrollHeight + 56}px`;
		}

		item.classList.toggle('villa__item--active');
	}
}

villaAccordionItems.addEventListener('click', onToggleAccordionItem);
