import "./styles.css";
import  "./PageLoad";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";



// Attach event listeners to the buttons
homeBtn.addEventListener('click', () => {
    renderHome();
});

menuBtn.addEventListener('click', () => {
    renderMenu()
});

aboutBtn.addEventListener('click', () => {
    renderAbout()
});