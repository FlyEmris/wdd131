const themeSelector = document.getElementById('theme');
const logo = document.getElementById('logo');

themeSelector.addEventListener('change', function(){
    if (this.value === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webn';
    }
});