const btn = document.querySelectorAll('.button');
const bdy = document.querySelector('body');

btn.forEach((b) => {
  b.addEventListener('click', function (e) {
    const change = e.target.id;
    switch (change) {
      case 'grey':
        bdy.style.backgroundColor = change;
        break;
      case 'yellow':
        bdy.style.backgroundColor = change;
        break;
      case 'white':
        bdy.style.backgroundColor = change;
        break;
      case 'blue':
        bdy.style.backgroundColor = change;
        break;
      default:
        document.body.style.backgroundColor = 'pink';
    }
  });
});
