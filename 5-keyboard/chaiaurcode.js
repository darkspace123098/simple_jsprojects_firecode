console.log('Project 5');
let into = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  into.innerHTML = `<h2>${e.key}</h2>
  <h3>${e.keyCode}</h3>
  <h3>${e.code}</h3>

  `;
});
