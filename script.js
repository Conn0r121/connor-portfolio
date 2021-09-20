 

function setTheme(mode) {
    let cssPath;
    switch(mode) {
        case 'blue':
        case 'green':
        case 'purple':
            cssPath = `${mode}.css`;
            break;
        case 'light':
        default:
            cssPath = 'default.css';
            break;
    }
    document.getElementById('theme-style').href = cssPath;
}
