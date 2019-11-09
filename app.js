const btn = document.getElementById("btn");
const container = document.querySelector(".row-cont");

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const respons = JSON.parse(xhr.responseText);
        cb(respons);
    });

    xhr.addEventListener("error", () => {
        console.log("error");
    });

    xhr.send();
}

function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach(post => {
        const cols6 = document.createElement("div");
        cols6.classList.add("col");
        cols6.classList.add("s6");
        const card = document.createElement("div");
        card.classList.add("card");
        const cardSize = document.createElement("div");
        cardSize.classList.add("card");
        cardSize.classList.add("medium");
        const cardImg = document.createElement("div");
        cardImg.classList.add("card-image");
        const img = document.createElement("img");
        img.src = "sample.jpg";
        const title = document.createElement("span");
        title.classList.add("card-title");
        title.textContent = post.title;
        const cardAction = document.createElement("div");
        cardAction.classList.add("card-action");
        const cardActionLink = document.createElement("a");
        cardActionLink.textContent = "This is a link";
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        cardContent.textContent = post.body;
        card.appendChild(cardSize);
        cardAction.appendChild(cardActionLink);
        cardSize.appendChild(cardImg);
        cardImg.appendChild(img);
        cardImg.appendChild(title);
        cardSize.appendChild(cardContent);
        cardSize.appendChild(cardAction);
        cols6.appendChild(card);
        fragment.appendChild(cols6);
    });
    container.appendChild(fragment);
}

btn.addEventListener("click", e => {
    getPosts(renderPosts);
});
