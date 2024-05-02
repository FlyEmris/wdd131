const themeSelector = document.getElementById('theme');
const lightLogo = document.getElementById('logo');
const darkLogo = document.getElementById('dark-logo');

themeSelector.addEventListener('change', function(){
    if (this.value === 'dark') {
        document.body.classList.add('dark');
        lightLogo.style.display = 'none';
        darkLogo.style.display = 'block';
    } else {
        document.body.classList.remove('dark');
        lightLogo.style.display = 'block';
        darkLogo.style.display = 'none';
    }
});