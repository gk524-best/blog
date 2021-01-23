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
})