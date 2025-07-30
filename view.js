export default function render(user) {
    // User info
    document.querySelector('#user-img').setAttribute('src', user.image);
    document.querySelector('#user-name').innerHTML = user.name;
    document.querySelector('#user-location').innerHTML = `${user.city}, ${user.country}`

    document.querySelector('#quote-content').innerHTML = user.quote;
    document.querySelector('#summary-content').innerHTML = user.summary;

    generateFriendsList(user.friends)
}

function generateFriendsList(friends) {
    const list = document.querySelector('#friends-list');
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.innerHTML = friend;
        list.appendChild(li);
    })
}