function showSearch() {
    document.querySelector('.search-with-button').classList.toggle('expand');
}

function toggleNavOn() {
    document.querySelector('.header-nav--small').classList.add('visible');
    document.querySelector('.nav-toggle-open').classList.add('hidden');
}

function toggleNavOff() {
    document.querySelector('.header-nav--small').classList.remove('visible');
    document.querySelector('.nav-toggle-open').classList.remove('hidden');
}