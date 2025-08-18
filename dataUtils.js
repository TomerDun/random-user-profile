export function formatPokemon(rawData) {
    const newPokemon = {
        name: rawData.name,
        img: rawData.sprites.front_default,
        move: rawData.moves[0].move.name,
    }
    return newPokemon;
}

export function generatePokeId() {
    return Math.floor(Math.random() * 200);
}

export function formatFriends(friendsData) {
    return friendsData.map(friend => `${friend.name.first} ${friend.name.last}`)
}

export function formatUserInfo(userData) {
    const userInfo = {
        name: `${userData.name.first} ${userData.name.last}`,
        country: userData.location.country,
        city: userData.location.city,
        image: userData.picture.large
    }
    return userInfo;
}