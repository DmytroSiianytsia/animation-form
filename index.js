const page = document.getElementById('container');

window.addEventListener('DOMContentLoaded', () => {
   Promise.all([
       fetch('./img/1.jpg'),
       fetch('./img/2.jpg'),
       fetch('./img/3.jpg'),
       fetch('./img/4.jpg'),
       fetch('./img/5.jpg')
   ])
       .then(result => result.map(item => {
           console.log(item.url);
           page.style.backgroundImage = `url(${item.url})`
       }))
});
