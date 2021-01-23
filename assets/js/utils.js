const themeKey = 'BLOG-THEME';

const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}

window.addEventListener('DOMContentLoaded',function() {
    const htmlDom = document.getElementsByTagName('html')[0];
    const storageTheme = storage.get(themeKey);
    let theme = 'light';
    if (storageTheme) {
        theme = storageTheme;
    }
    htmlDom.setAttribute('data-color-mode', theme);

    // search
    const searchInput = document.getElementById('search-input');
    const searchResult = document.getElementsByClassName('search-results')[0];
    const searchCont = document.getElementsByClassName('search-wrapper')[0];
    const body = document.getElementsByTagName('body')[0];
    body.onclick = function() {
        searchInput.classList.remove('search-input-focus');
        searchResult.classList.remove('search-result-show')
    }
    searchInput.onfocus = function() {
        this.classList.add('search-input-focus');
        searchResult.classList.add('search-result-show')
    }
    searchCont.onclick = function(event) {
        event.stopPropagation();
    }
    // copyright
    const yearCont = document.getElementById('copyright-year');
    yearCont.innerText = new Date().getFullYear();

    // theme toggle
    const themeToggle = document.getElementsByClassName('theme-mode-toggle')[0];
    themeToggle.onclick = function(event) {
        event.preventDefault();
        const curTheme = htmlDom.getAttribute('data-color-mode');
        switch (curTheme) {
            case 'light':
                htmlDom.setAttribute('data-color-mode', 'dark');
                storage.set(themeKey, 'dark');
                break;
            case 'dark':
                htmlDom.setAttribute('data-color-mode', 'light');
                storage.set(themeKey, 'light');
                break;
            default:
                break;
        }
    }
})