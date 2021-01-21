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
    window.simpleJekyllSearch = new SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '{{ site.baseurl }}/search.json',
        searchResultTemplate: '<li><a href="{url}?query={query}" title="{desc}">{title}</a></li>',
        noResultsText: 'No results found',
        limit: 10,
        fuzzy: false,
        exclude: ['Welcome']
    })
})