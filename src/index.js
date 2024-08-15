import "./styles.css";
import  "./PageLoad";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import { aboutContent } from "./about";



// Attach event listeners to the buttons
homeBtn.addEventListener('click', () => {
    content.innerHTML = homeContent.home;
});

menuBtn.addEventListener('click', () => {
    content.innerHTML = menuContent.menu;
});

aboutBtn.addEventListener('click', () => {
    content.innerHTML = aboutContent.about;
});