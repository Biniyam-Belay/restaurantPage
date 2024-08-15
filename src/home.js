import { container } from "./PageLoad";

export const homeContent = {
    home: `
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best culinary delights with us.</p>`
}

export function renderHome(){
    container.innerHTML = homeContent.home;
}