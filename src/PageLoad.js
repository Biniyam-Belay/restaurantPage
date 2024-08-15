export function pageLoad (){
    const title = document.createElement('h1');
    title.innerHTML = "Welcome to Our Restaurant";

    const text = document.createElement('p')
    text.innerHTML = "Experience the best culinary delights with us."


    const container = document.getElementById('content');
    container.appendChild(title);
    container.appendChild(text)
}

pageLoad()