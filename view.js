export default function render(user) {
    // User info
    document.querySelector('#user-img').setAttribute('src', user.image);
    document.querySelector('#user-name').innerHTML = user.name;
    document.querySelector('#user-location').innerHTML = `${user.city}, ${user.country}`

    document.querySelector('#quote-content').innerHTML = `"${user.quote}"`;
    document.querySelector('#summary-content').innerHTML = user.summary;

    generateFriendsList(user.friends)

    // Pokemon
    document.querySelector('#poke-img').setAttribute('src', user.pokemon.img);
    document.querySelector('#poke-content').innerHTML = getPokeContent(user.pokemon);
    
}

function generateFriendsList(friends) {
    const list = document.querySelector('#friends-list');
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.innerHTML = friend;
        list.appendChild(li);
    })
}

function getPokeContent(pokemon) {
    return `This is ${pokemon.name}, I like him because he can do '${pokemon.move}'`
}