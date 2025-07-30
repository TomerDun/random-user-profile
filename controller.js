import User from "./userModel.js";
import { getFriendsData, getPokemon, getQuote, getSummary, getUserData } from "./apiHandler.js";

const user = new User();

async function collectAllData() {
    const [userInfo, friends, pokeData, summary, quote] = await Promise.all(
        [getUserData(), getFriendsData(), getPokemon(), getSummary(), getQuote()]
    )

    return [userInfo, friends, pokeData, summary, quote]
}

async function updateUserInfo() {
    const userData = await getUserData();
    user.name = `${userData.name.first} ${userData.name.last}`
    user.country = userData.location.country;
    user.city = userData.location.city;            
}
