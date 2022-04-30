import './style.css';
import './Layer/index.js'
import { Layer } from './Layer/index.js';

console.log('funguju!');
//Navigace (3)
document.querySelector('#nav-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed')
})

const navElm = document.querySelectorAll('nav a')
navElm.forEach((item) => {
    item.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed')
})}
)

//Objednání (4)
const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = false;

orderBtn.addEventListener('click', () => {
    if (ordered) {
    orderBtn.textContent = 'Objednat',
    drinkCup.classList.remove('drink__cup--selected');
    ordered = false;
    } else {
        orderBtn.textContent = 'Zrušit';
        drinkCup.classList.add('drink__cup--selected');
        ordered = true;
    }
});

//Ingredience jako komponenty

const ingredients = [
    {
        color: '#feeeca',
        label: 'mléčná pěna',
    },
    {
        color: '#fed7b0',
        label: 'teplé mléko',
    },
    {
        color: '#613916',
        label: 'espresso',
    },
];
const drinkIngr = document.querySelector('.drink__info');
ingredients.forEach((item) => {
    drinkIngr.appendChild(Layer(item));
})