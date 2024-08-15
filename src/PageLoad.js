import { renderHome } from "./home";

export const container = document.getElementById('content');

export function pageLoad (){
    renderHome()
}

pageLoad()