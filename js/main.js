/* Bob Stillman — shared behaviour */
(function () {
  // hamburger overlay menu
  var burger = document.getElementById('burger');
  var body = document.body;
  if (burger) {
    burger.addEventListener('click', function () {
      body.classList.toggle('menu-open');
      var open = body.classList.contains('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.overflow = open ? 'hidden' : '';
    });
  }
  // close menu on Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
      body.style.overflow = '';
      if (burger) burger.setAttribute('aria-expanded', 'false');
    }
  });

  // topbar background on scroll
  var topbar = document.getElementById('topbar');
  if (topbar) {
    var onScroll = function () { topbar.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // reveal on scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // current year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
