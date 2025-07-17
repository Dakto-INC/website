const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    discord = document.querySelector(".discordframe");
    disexport = document.querySelector("#disexport");
    disqus = document.querySelector("#disqus_thread");
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
	     toggleButton.src = "/img/dark.svg";
	    if (disexport) {disexport.setAttribute("src", "https://daktoinc.co.uk/disexport/dark/");}
	    if (discord) {discord.setAttribute("src", "https://discord.com/widget?id=772434304009109525&theme=dark");}
	    if (disqus) {
		    DISQUS.host._loadEmbed();
	    }
    } else {
        body.classList.replace('dark-mode', 'light-mode');
	     toggleButton.src = "/img/light.svg";
	    if (disexport) {disexport.setAttribute("src", "https://daktoinc.co.uk/disexport/light/");}
	    if (discord) {discord.setAttribute("src", "https://discord.com/widget?id=772434304009109525&theme=light");}
	    if (disqus) {
DISQUS.host._loadEmbed();
    }
}
}
);
