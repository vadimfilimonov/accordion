const who = () => document.querySelector(`.js-accordion`);

const findElements = (object, element) => {
	const instance = object;
	instance.element = element;
	instance.target = element.nextElementSibling;
};

const hideElement = (object) => {
	const instance = object;
	const { target } = instance;
	target.style.height = null;
	instance.isActive = false;
};

const showElement = (object) => {
	const instance = object;
	const { target, height } = instance;
	target.style.height = `${height}px`;
	instance.isActive = true;
};

const changeElementStatus = (instance) => {
	if (instance.isActive) {
		hideElement(instance);
	} else {
		showElement(instance);
	}
};

const measureHeight = (object) => {
	const instance = object;
	instance.height = object.target.firstElementChild.clientHeight;
};

const subscribe = (instance) => {
	instance.element.addEventListener('click', (event) => {
		event.preventDefault();
		changeElementStatus(instance);
	});
	window.addEventListener('resize', () => measureHeight(instance));
};

const constructor = (element) => {
	const instance = {};

	const init = () => {
		findElements(instance, element);
		measureHeight(instance);
		subscribe(instance);
	};

  init();

  return instance;
};

const accordion = () => {
  if (!who()) return;
  const elements = [...document.querySelectorAll('.js-accordion')];
  elements.forEach(constructor);
};

module.exports = accordion;
