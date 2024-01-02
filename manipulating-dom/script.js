const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = "This is some red text";
redText.style.color = 'red';

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3";
blueH3.style.color = 'blue';

container.appendChild(redText);
container.appendChild(blueH3);

const div = document.createElement('div');
div.style.border = 'solid black 1px';
div.style.backgroundColor = 'pink';

const divH1 = document.createElement('h1');
divH1.textContent = "I'm in the div";
const divP = document.createElement('p');
divP.textContent = "ME TOO!";

div.appendChild(divH1);
div.appendChild(divP);

container.appendChild(div);

const secondButton = document.querySelector('#btn');
secondButton.onclick = () => alert('You just clicked the second button');

const btn = document.querySelector('#btn-three');
btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
  });

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        e.target.style.background = 'honeydew';
        e.target.textContent = 'I am feeling much better tonight';
    });
});
