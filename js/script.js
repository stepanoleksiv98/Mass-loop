'use script';

const btnMobileStyle = document.querySelector('.mobile__style');
const btnMobile = document.querySelector('.btn--mobile');
const langList = document.querySelector('.lang__list');
const header = document.querySelector('.header');
const calcContainer = document.querySelector('.calc__container');

btnMobile.addEventListener('click', function () {
	header.classList.toggle('header--open');
	btnMobileStyle.classList.toggle('mobile__style--open');
	document.body.classList.toggle('stop-scroll');
	console.log('click');
});

header.addEventListener('click', function (e) {
	const langActive = e.target.closest('.lang__link--active');
	if (!langActive) return;
	e.preventDefault();
	const langSelect = e.target.closest('.lang__list');
	langSelect.classList.toggle('lang__list--open');
});

const calcPrice = function () {
	let bins;
	let payment;
	calcContainer.addEventListener('input', function (e) {
		const getBins = function () {
			if (!e.target.closest('.calc__input--bins')) return;
			bins = +e.target.closest('.calc__input--bins').value;
		};
		const getPayment = function () {
			if (!e.target.closest('.calc__input--payment')) return;
			payment = +e.target.closest('.calc__input--payment').value;
		};
		getBins();
		getPayment();

		if (!bins) return;
		if (!payment) return;

		const output = document.querySelector('.calc__output');
		output.textContent = `${parseFloat(`${12 * (bins * payment - (bins * payment) / 5)}`).toFixed(
			2
		)} zł`;
		output.style.color = '#ffb001';
		output.style.opacity = 1;
	});
};

calcPrice();
