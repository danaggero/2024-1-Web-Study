var heading = document.getElementById('title1');
var button = document.getElementById('colorbutton');

var blue = true;

button.addEventListener('click', function() {
    if(blue) {
        heading.style.color = 'red'
    } else {
        heading.style.color = 'blue'
    }
    blue = !blue; //초기화
});
