const url = ['./img/bg-city.jpg', './img/bg-tree-1920x1080.jpg'];
let count = Math.floor(Math.random() * 2);

const container = document.getElementById('container');
container.style.backgroundImage = `url(${url[count]})`;

setInterval(function() {
  container.style.backgroundImage = `url(${url[count]})`;
  count++;

  if (count > 1) count = 0;
}, 60000);
