let inputbox = document.querySelector('#inputbox');

function solve() {
  let exp = inputbox.value;
  let result = eval(exp);
  return result;
}

window.addEventListener('keydown', (e) => {
  if (
    e.key == '0' ||
    e.key == '1' ||
    e.key == '2' ||
    e.key == '3' ||
    e.key == '4' ||
    e.key == '5' ||
    e.key == '6' ||
    e.key == '7' ||
    e.key == '8' ||
    e.key == '9' ||
    e.key == '+' ||
    e.key == '-' ||
    e.key == '/' ||
    e.key == '*' ||
    e.key == '.'
  ) {
    inputbox.value += e.key;
  }
  if (e.key == 'Enter') {
    inputbox.value = solve();
  }
  if (e.key == 'Backspace') {
    inputbox.value = '';
  }
});
