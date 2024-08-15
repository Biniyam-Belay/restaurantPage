export const container = document.getElementById('content');

export function pageLoad (){
    const title = document.createElement('h1');
    title.innerHTML = "Welcome to Our Restaurant";

    const text = document.createElement('p')
    text.innerHTML = "Experience the best culinary delights with us."

    container.appendChild(title);
    container.appendChild(text)
}

pageLoad()