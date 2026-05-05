(function () {
  var html = document.documentElement;
  var btn  = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var isDark = html.getAttribute('data-theme') === 'dark';
    var next   = isDark ? 'light' : 'dark';

    html.classList.add('theme-transition');
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    setTimeout(function () {
      html.classList.remove('theme-transition');
    }, 300);
  });
})();
