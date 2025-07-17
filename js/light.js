const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    discord = document.querySelector(".discordframe");
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
	     toggleButton.src = "/img/dark.svg";
	    if (discord) {discord.setAttribute("src", "https://discord.com/widget?id=772434304009109525&theme=dark");}
    } else {
        body.classList.replace('dark-mode', 'light-mode');
	     toggleButton.src = "/img/light.svg";
	    if (discord) {discord.setAttribute("src", "https://discord.com/widget?id=772434304009109525&theme=light");}

    }
});
