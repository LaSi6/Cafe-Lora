import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
    const {id, name, layers, image} = props;
    let {ordered} = props;
    const drinkElm = document.createElement('div');
    drinkElm.classList.add('drink')
    drinkElm.innerHTML += `
        <div class="drink__product">
            <div class="drink__cup">
                <img src="${image}" />
            </div>
            <div class="drink__info">
                <h3>${name}</h3>
            </div>
        </div>
        <div class="drink__controls">
            <button class="order-btn">Objednat</button>
        </div>`
    
    const drinkIngr = drinkElm.querySelector('.drink__info');
    layers.forEach((item) => {
        drinkIngr.appendChild(Layer(item));
    });

    const orderBtn = drinkElm.querySelector('.order-btn');
    const drinkCup = drinkElm.querySelector('.drink__cup');

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

    return drinkElm  
  };
