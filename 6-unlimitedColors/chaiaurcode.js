let randomColor = () => {
  let hex = '0123456789ABCDEF';
  let color = '#';

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
};

let intervalId;

function startChanging() {
  if (!intervalId) {
    intervalId = setInterval(changecolor, 10);
  }
}

function stopChanging() {
  clearInterval(intervalId);
  intervalId = null;
}

let changecolor = () => {
  document.body.style.background = randomColor();
  let tag = document.querySelector('h1');
  tag.style.color = randomColor();
};

document.getElementById('start').addEventListener('click', () => {
  startChanging();
});

document.getElementById('stop').addEventListener('click', () => {
  stopChanging();
});
