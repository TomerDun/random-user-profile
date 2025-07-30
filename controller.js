import User from "./userModel.js";
import { getFriendsData, getPokemon, getQuote, getSummary, getUserData } from "./apiHandler.js";

const user = new User();

async function collectAllData() {
    const [userInfo, friends, pokeData, summary, quote] = await Promise.all(
        [getUserData(), getFriendsData(), getPokemon(), getSummary(), getQuote()]
    )

    return [userInfo, friends, pokeData, summary, quote]
}

async function updateUserData() {
    const [userInfo, friends, pokeData, summary, quote] = await collectAllData();

    console.log(summary);
    console.log(quote);

    // Update user info
    user.name = `${userInfo.name.first} ${userInfo.name.last}`
    user.country = userInfo.location.country;
    user.city = userInfo.location.city;            
    
    user.friends = friends;
    user.pokemon = pokeData;
    user.quote = quote;
    user.summary = summary;    
}
