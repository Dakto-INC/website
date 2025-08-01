const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
body.classList.add('light-mode');
const lighticon='<svg class="lightdarkicon" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>';
const darkicon='<svg class="lightdarkicon" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>';

function lightdark(light){
  discord = document.querySelector(".discordframe");
    disexport = document.querySelector("#disexport");
    disqus = document.querySelector("#disqus_thread");
    if (light==="dark") {
        body.classList.replace('light-mode', 'dark-mode');
localStorage.setItem("lightdark","dark");
	     toggleButton.innerHTML = darkicon;
	    if (disexport) {disexport.setAttribute("src", "https://daktoinc.co.uk/disexport/dark/");}
	    if (discord) {discord.setAttribute("src", "https://discord.com/widget?id=772434304009109525&theme=dark");}
	    if (disqus) {
		    setTimeout(function(){DISQUS.host._loadEmbed();}, 0600);
	    }
    } else {
        body.classList.replace('dark-mode', 'light-mode');
localStorage.setItem("lightdark","light");
	     toggleButton.innerHTML = lighticon;
	    if (disexport) {disexport.setAttribute("src", "https://daktoinc.co.uk/disexport/light/");}
	    if (discord) {discord.setAttribute("src", "https://discord.com/widget?id=772434304009109525&theme=light");}
	    if (disqus) {
		    setTimeout(function(){DISQUS.host._loadEmbed();}, 0600);
    }
}


}

function lightdarkmain(){
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
	    lightdark("dark");
    } else {
	    lightdark("light");
    }
}

);
if (localStorage.getItem("lightdark")===null ){
if (window.matchMedia){
localStorage.setItem("lightdark",window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark": "light");
		


} else {
localStorage.setItem("lightdark","light");
}
}


if (localStorage.getItem("lightdark")==="dark") {
	                lightdark("dark");
} else {

	    lightdark("light");
}
}

document.addEventListener('DOMContentLoaded',lightdarkmain );

