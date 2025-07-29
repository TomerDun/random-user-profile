// Random User API
async function getUserData() {
    // Retrieves data from an API and returns a formatted user
    const url = 'https://randomuser.me/api/'; // Get 1 user
    const res = await fetch(url);
    if (!res.ok) throw Error (`Error retrieving random user from API (Code ${res.statusText})`);
    let data = await res.json()
    return data.results[0];
}