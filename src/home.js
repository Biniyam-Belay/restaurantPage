import { container } from "./PageLoad";
import headImage from "./image.png"

export const homeContent = {
    home: `
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best culinary delights with us.</p>
        <img class="headImage" src=${headImage}>`
}

export function renderHome(){
    container.innerHTML = homeContent.home;
}