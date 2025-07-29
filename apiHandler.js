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