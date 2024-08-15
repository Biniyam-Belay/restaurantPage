import { container } from "./PageLoad";
import headImage from "./image.png"

export const menuContent = {
    menu: `
        <h1>Our Menu</h1>
        <p>Explore our wide range of delicious dishes.</p>
        <img class="headImage" src=${headImage}>
    `
}

export function renderMenu(){
    container.innerHTML = menuContent.menu;
}