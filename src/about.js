import { container } from "./PageLoad";
import headImage from "./image.png"

export const aboutContent = {
    about: `
        <h1>About Us</h1>
        <p>Learn more about our journey and values.</p>
        <img class="headImage" src=${headImage}>
        `
};

export function renderAbout(){
    container.innerHTML = aboutContent.about;
}