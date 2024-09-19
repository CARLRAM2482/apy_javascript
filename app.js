const apiurl = "https://rickandmortyapi.com/api/character";

function makecard(character) {
    const { name, status, image } = character;
    const cardsContainer = document.querySelector(".cards-container");

    const title = document.createElement("h5");
    title.textContent = name;

    const characterstatus = document.createElement("p");
    characterstatus.textContent = status;
    characterstatus.classList.add(status === "Alive" ? "alive" : "dead");

    const characterimge = document.createElement("img");
    characterimge.src = image;
    characterimge.width = 200;

    const card = document.createElement("div");
    card.appendChild(title);
    card.appendChild(characterimge);
    card.appendChild(characterstatus);

    cardsContainer.appendChild(card);
}

async function getCharacters() {
    try {
        const response = await fetch(apiurl);
        const { results } = await response.json();

        for (let i = 0; i < results.length; i++) {
            makecard(results[i]);
        }
        console.log(results);
    } catch (error) {
        console.error(error);
    }
}

getCharacters();
