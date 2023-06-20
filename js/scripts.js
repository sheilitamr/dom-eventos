const buttonElement = document.getElementById('button');

const handleClick = () => {
  console.dir(buttonElement.textContent);
};

/* buttonElement.addEventListener('click', handleClick); */

const titleElement = document.getElementById('title');

const handleMouseOver = () => {
  titleElement.textContent = 'Quita de encima';
};

const handleMouseLeave = () => {
  titleElement.textContent = 'Soy un título';
};

/* titleElement.addEventListener('mouseover', handleMouseOver);

titleElement.addEventListener('mouseleave', handleMouseLeave); */

const resizeWindow = e => {
  console.log(e.target.innerHeight);
  console.log(e.target.innerWidth);
};

/* window.addEventListener('resize', resizeWindow); */
const textElement = document.getElementById('text');
const handleKeyboard = e => {
  textElement.textContent = e.key;
};

/* window.addEventListener('keydown', handleKeyboard); */

const words = ['hola', 'adios', 'mano', 'anubis', 'nala'];
const slideTextElement = document.getElementById('slide-text');
const buttonPreviousElement = document.getElementById('previous');
const buttonNextElement = document.getElementById('next');
let cont = 0;

slideTextElement.textContent = words[cont];
const handlePreviousButton = () => {
  if (cont === 0) {
    cont = words.length - 1;
  } else {
    cont--;
  }
  slideTextElement.textContent = words[cont];
};
const handleNextButton = () => {
  if (cont === words.length - 1) {
    cont = 0;
  } else {
    cont++;
  }
  slideTextElement.textContent = words[cont];
};

buttonPreviousElement.addEventListener('click', handlePreviousButton);
buttonNextElement.addEventListener('click', handleNextButton);

const words2 = ['hola', 'adios', 'mano', 'anubis', 'nala'];
const slideTextElement2 = document.getElementById('slide-text2');
const buttonPreviousElement2 = document.getElementById('previous2');
const buttonNextElement2 = document.getElementById('next2');
let cont2 = 0;
buttonPreviousElement2.disabled = true;

slideTextElement2.textContent = words2[cont2];
const handlePreviousButton2 = () => {
  if (cont2 === 0) {
    buttonPreviousElement2.disabled = true;
  } else {
    buttonNextElement2.disabled = false;
    cont2--;
  }
  slideTextElement2.textContent = words2[cont2];
};
const handleNextButton2 = () => {
  if (cont2 === words2.length - 1) {
    buttonNextElement2.disabled = true;
  } else {
    buttonPreviousElement2.disabled = false;
    cont2++;
  }
  slideTextElement2.textContent = words2[cont2];
};

buttonPreviousElement2.addEventListener('click', handlePreviousButton2);
buttonNextElement2.addEventListener('click', handleNextButton2);

const labelRangeElement = document.getElementById('label-range');
const rangeElement = document.getElementById('range');

labelRangeElement.textContent = rangeElement.value;

//Con el evento input sale el valor cuando lo estás moviendo, no hace falta soltar el ratón para que se vea el valor
rangeElement.addEventListener('input', () => {
  labelRangeElement.textContent = rangeElement.value;
});

//Con el evento change solo sale el valor al soltar el ratón
/* rangeElement.addEventListener('change', () => {
  labelRangeElement.textContent = rangeElement.value;
});
 */

const buttonCheckbox = document.getElementById('button-checkbox');
const allLabels = document.querySelectorAll('.label');
const allCheckbox = document.querySelectorAll('.checkbox');

const handleClickCheckbox = e => {
  let counter = 0;
  const textLabels = [];
  allCheckbox.forEach(checkbox => {
    if (checkbox.checked) {
      counter++;
      textLabels.push(checkbox.previousElementSibling.textContent);
    }
  });
  console.log(
    `Los checkbox activados son: ${counter} y su contenido es ${textLabels}`
  );
};

buttonCheckbox.addEventListener('click', handleClickCheckbox);
