const page = document.getElementById('container');

window.addEventListener('DOMContentLoaded', () => {
   Promise.all([
       page.style.backgroundImage = './img/1.jpg',
       page.style.backgroundImage = './img/2.jpg',
       page.style.backgroundImage = './img/3.jpg',
       page.style.backgroundImage = './img/4.jpg',
       page.style.backgroundImage = './img/5.jpg'
   ])

       .then(result => console.log(result))
});


