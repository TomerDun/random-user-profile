import User from "./userModel.js";
import { getUserData } from "./apiHandler";

const user = new User();

async function createUser() {
    const userData = getUserData();
    user.name = `${userData.name.first} ${userData.name.last}`
    user.country = userData.location.country;
    user.city = userData.location.city;
}