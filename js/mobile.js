function setupNavDropdowns() {
  if (window.innerWidth <= 600) {
    document.querySelectorAll('nav .has-dropdown > a').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var li = anchor.parentElement;
        li.classList.toggle('open');
        document.querySelectorAll('nav .has-dropdown').forEach(function(otherLi) {
          if (otherLi !== li) otherLi.classList.remove('open');
        });
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', setupNavDropdowns);
window.addEventListener('resize', setupNavDropdowns);