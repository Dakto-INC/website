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

