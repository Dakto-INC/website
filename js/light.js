
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
	     toggleButton.src = "/img/dark.svg";
    } else {
        body.classList.replace('dark-mode', 'light-mode');
	     toggleButton.src = "/img/light.svg";
    }
});
