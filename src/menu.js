import { container } from "./PageLoad";

export const menuContent = {
    menu: `
        <h1>Our Menu</h1>
        <p>Explore our wide range of delicious dishes.</p>
    `
}

export function renderMenu(){
    container.innerHTML = menuContent.menu;
}