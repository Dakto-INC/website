	  //https://glidejs.com/docs/options/
	  //Hey dak there are some cool that u can play with
  new Glide('.piclide',{
  type: 'carousel',
	  autoplay: 2700,
	        perView: 1,
	  hoverpause: true
}).mount();

  new Glide('.plide',{
  type: 'carousel',
	  autoplay: 2700,
	        perView: 2,
	  hoverpause: true,
	    breakpoints: {
 600: {
    perView: 1
  }
	    }
}).mount();

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
