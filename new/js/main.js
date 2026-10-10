// https://glidejs.com/docs/options/
// Hey dak there are some cool options that u can play with

if (document.querySelector('.piclide')) {
  new Glide('.piclide', {
    type: 'carousel',
    autoplay: 2700,
    perView: 1,
    hoverpause: true
  }).mount();
}

if (document.querySelector('.plide')) {
  new Glide('.plide', {
    type: 'carousel',
    autoplay: 2700,
    perView: 3,
    gap: 16,
    hoverpause: true,
    breakpoints: {
      // up to 900px wide: 2 cards, up to 600px wide: 1 card
      900: { perView: 2 },
      600: { perView: 1 }
    }
  }).mount();
}
