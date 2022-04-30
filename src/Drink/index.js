import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
    const {id, name, ordered, layers, image} = props;
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

    return drinkElm  
  };
