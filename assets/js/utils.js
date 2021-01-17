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
})