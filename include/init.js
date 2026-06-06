$(document).ready(function () {

  /* ── Sticky header ── */
  var $win        = $(window);
  var $header     = $('#myHeader');
  var $sticky     = $('#stickymyHeader');

  function updateSticky() {
    if ($win.scrollTop() > $header.outerHeight()) {
      $sticky.addClass('visible');
    } else {
      $sticky.removeClass('visible');
    }
  }

  $win.on('scroll', updateSticky);
  updateSticky();

  /* ── Hamburger menu ── */
  // Each header (main + sticky) has its own #hamburger + .menu.nav pair.
  $('a#hamburger').on('click', function (e) {
    e.preventDefault();
    // Toggle the .menu.nav that is a sibling inside the same .hoofdmenu wrapper.
    $(this).closest('.hoofdmenu').find('.menu.nav').toggleClass('open');
  });

});

/* ── Show/hide collapsibles (called via onclick="showhide(id)") ── */
function showhide(id) {
  var $panel  = $('#hide' + id);
  var $header = $('#' + id);

  $panel.toggle();
  $header.toggleClass('open');
}
