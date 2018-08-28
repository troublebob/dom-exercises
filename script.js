
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
const paraContent = document.createElement('p');
paraContent.classList.add('content');
paraContent.textContent = "Hey I'm red!";
paraContent.style.color = 'red';
container.appendChild(paraContent);
const header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3"
//header3.classList.add('blue'); This works don't know whhy
header3.style.color='blue';
const newdiv = document.createElement('div'); 
newdiv.style.borderColor='black';
newdiv.style.borderStyle='solid';
newdiv.style.backgroundColor='pink';
const header1 = document.createElement('h1');
header1.textContent = "I'm in a div!"
paraContent.textContent = "ME TOO!"
paraContent.style.color = 'grey'
newdiv.appendChild(header1);
newdiv.appendChild(paraContent);
container.appendChild(content);
container.appendChild(header3);
container.appendChild(newdiv);

var btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World through the medium of javascript");
/*
var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert("Hello World through the medium of an Eventlistener!");
});
*/
var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click',  function(e){
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue'
    //alert("Hello World through the medium of an Eventlistener!");
});
btn1.onclick(alertFunction("Hello World through the medium of an Eventlistener!"));
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alertFunction(button.id);
  });
});
function alertFunction(s){
  alert(s);
}