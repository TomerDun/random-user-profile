// Random User API
export async function getUserData() {    
    const url = 'https://randomuser.me/api/'; // Get 1 user
    const res = await fetch(url);
    if (!res.ok) throw Error (`Error retrieving random user from API (Code ${res.statusText})`);
    let data = await res.json()
    return data.results[0];
}

export async function getFriendsData(amount=6) {
    const url = 'https://randomuser.me/api/?results=' + amount; // Get 1 user
    const res = await fetch(url);
    if (!res.ok) throw Error (`Error retrieving random user from API (Code ${res.statusText})`);
    let data = await res.json()
    return data.results;
}

// Random Quote
export async function getQuote() {
    const url = 'https://api.kanye.rest';
    const res = await fetch(url);
    if (!res.ok) throw Error (`Error retrieving random Quote (Code ${res.statusText})`);
    let data = await res.json()
    return data.quote;
}

// Meat
export async function getSummary() {
    const url = 'https://baconipsum.com/api/?type=meat';
    const res = await fetch(url);
    if (!res.ok) throw Error (`Error retrieving Summary (Code ${res.statusText})`);
    let data = await res.json()
    return data[0];
}

export async function getPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    const res = await fetch(url);
    if (!res.ok) throw Error (`Error retrieving Summary (Code ${res.statusText})`);
}

// Utils

function formatPokemon(rawData) {
    const newPokemon = {
        name: rawData.name,
        img: rawData.sprites.front_default,
        move: rawData.moves[0].move.name,
    }
    return newPokemon;
}

function generatePokeId() {
    return Math.floor(Math.random() * 200);    
}

console.log(generatePokeId());
