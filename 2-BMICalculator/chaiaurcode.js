const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const result = document.querySelector('#results');

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (height == '' || height < 0 || isNaN(height)) {
    alert('please enter valid height');
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    alert('please enter valid weight');
  } else {
    result.innerHTML = `<span>${bmi}</span>`;
  }
  //ugt
});
