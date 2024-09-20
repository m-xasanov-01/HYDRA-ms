const rightIcon = document.querySelector('.fa-arrow-right');
const whyBuilt = document.querySelector('.why-build');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const techno = document.querySelector('.techno');
const howTo = document.querySelector('.how-to');
const headerContactBtn = document.querySelector('.header__contact-btn');
const headerJoinBtn = document.querySelector('.header__join-btn');

rightIcon.addEventListener('mouseover', () => {
	rightIcon.classList.remove('fa-beat-fade');
});
rightIcon.addEventListener('mouseout', () => {
	rightIcon.classList.add('fa-beat-fade');
});

about.addEventListener('click', () => {
	document.querySelector('.site-intro').scrollIntoView({ behavior: 'smooth' });
});

services.addEventListener('click', () => {
	document
		.querySelector('.why-build__list')
		.scrollIntoView({ behavior: 'smooth' });
});
techno.addEventListener('click', () => {
	document.querySelector('.tech').scrollIntoView({ behavior: 'smooth' });
});
howTo.addEventListener('click', () => {
	document.querySelector('.how-build').scrollIntoView({ behavior: 'smooth' });
});
headerJoinBtn.addEventListener('click', () => {
	document.querySelector('.join').scrollIntoView({ behavior: 'smooth' });
});
headerContactBtn.addEventListener('click', () => {
	document.querySelector('.site-footer').scrollIntoView({ behavior: 'smooth' });
});
