const darkModeButton = document.querySelector('.dark-mode');
let isDarkMode = false;

document.querySelector('.toggle').addEventListener('click', function () {
    this.classList.add('animate');

    setTimeout(() => {
        this.classList.toggle('active');
    }, 150);

    setTimeout(() => this.classList.remove('animate'), 300);

    isDarkMode = (isDarkMode) ? false : true;
    changeTheme()
});


function changeTheme() {
    return (isDarkMode) ? turnOnDarkMode() : turnOffDarkMode()
}

const turnOnDarkMode = () => {
    document.documentElement.style.setProperty('--result-ButtonColor', 'var(--darkResult-ButtonColor)');
    document.documentElement.style.setProperty('--backgroundButton', 'var(--darkBackgroundButton)');
    document.documentElement.style.setProperty('--backgroundImage', 'var(--darkBackgroundImage)');
    document.documentElement.style.setProperty('--grayButton', 'var(--darkGrayButton)');
    document.documentElement.style.setProperty('--buttonHover', 'var(--darkButtonHover)');
}

const turnOffDarkMode = () => {
    document.documentElement.style.setProperty('--result-ButtonColor', '#000');
    document.documentElement.style.setProperty('--backgroundButton', '#FFF');
    document.documentElement.style.setProperty('--backgroundImage', 'var(--backgroundImageBkp)');
    document.documentElement.style.setProperty('--grayButton', '#D2D3DA');
    document.documentElement.style.setProperty('--buttonHover', '#E0E0E0');
}