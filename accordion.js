const shouldRun = () => document.querySelector('.js-accordion');

const findElements = (object, element) => {
  const instance = object;
  instance.element = element;
  instance.target = element.nextElementSibling;
};

const hideElement = (object) => {
  const instance = object;
  const { element, target } = instance;
  target.style.height = null;
  element.classList.remove('js-accordion-is-active');
  instance.isActive = false;
};

const showElement = (object) => {
  const instance = object;
  const { element, target, height } = instance;
  target.style.height = `${height}px`;
  element.classList.add('js-accordion-is-active');
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
};

const accordion = () => {
  if (!shouldRun()) {
    return;
  }
  const elements = [...document.querySelectorAll('.js-accordion')];
  elements.forEach(constructor);
};

module.exports = accordion;
