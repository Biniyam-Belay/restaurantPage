export function pageLoad (){
    const title = document.createElement('h1');
    title.classList.add('title')
    title.innerHTML = "Welcome to DANCHA Restaurant";

    const text = document.createElement('p')
    text.innerHTML = "Your food Hotspot"


    const container = document.getElementById('content');
    container.appendChild(title);
    container.appendChild(text)
}

pageLoad()