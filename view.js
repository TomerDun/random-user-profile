export default function render(user) {
    // User info
    document.querySelector('#user-img').setAttribute('src', user.image);
    document.querySelector('#user-name').innerHTML = user.name;
    document.querySelector('#user-location').innerHTML = `${user.city}, ${user.country}`

    document.querySelector('#quote-content').innerHTML = user.quote;
    document.querySelector('#summary-content').innerHTML = user.summary;



}