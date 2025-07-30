import User from "./userModel.js";
import { getFriends, getPokemon, getQuote, getSummary, getUserInfo } from "./apiHandler.js";
import render from "./view.js";

const user = new User();

async function collectAllData() {
    const [userInfo, friends, pokeData, summary, quote] = await Promise.all(
        [getUserInfo(), getFriends(), getPokemon(), getSummary(), getQuote()]
    )

    return [userInfo, friends, pokeData, summary, quote]
}

async function updateUserData() {
    const [userInfo, friends, pokeData, summary, quote] = await collectAllData();
    
    user.name = userInfo.name;
    user.country = userInfo.country;
    user.city = userInfo.city;            
    user.image = userInfo.image;
    
    user.friends = friends;
    user.pokemon = pokeData;
    user.quote = quote;
    user.summary = summary;    
}

async function main() {
    await updateUserData();
    render(user);
    console.log('eof');
    
}

document.addEventListener('DOMContentLoaded', main);


