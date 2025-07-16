function setupNavDropdowns() {
    document.querySelectorAll('.dki-nav-clickbox').forEach(function(anchor) {
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
document.addEventListener('DOMContentLoaded', setupNavDropdowns);

