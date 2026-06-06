window.addEventListener('load', function () {
  window.cookieconsent.initialise({
    palette: {
      popup:  { background: '#2b8f99', text: '#ffffff' },
      button: { background: '#ffffff', text: '#2b8f99' }
    },
    theme:    'classic',
    position: 'bottom',
    content: {
      message: 'Deze website maakt gebruik van cookies om de beste ervaring te bieden.',
      dismiss: 'Akkoord',
      link:    'Meer informatie',
      href:    '#'
    }
  });
});
