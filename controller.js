import User from "./userModel.js";
import { getUserData } from "./apiHandler.js";

const user = new User();

async function createUser() {
    const userData = await getUserData();
    user.name = `${userData.name.first} ${userData.name.last}`
    user.country = userData.location.country;
    user.city = userData.location.city;
    
    console.log(user);
    
}