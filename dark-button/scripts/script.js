// button dark mode
const dkbutton = document.getElementById('dmode');
// Element Variables
const heading = document.getElementById('h1');
const paragraph = document.getElementById('p');


dkbutton.addEventListener('click', function(){
    containStyleDark();    
});

function containStyleDark() {
    document.body.style.backgroundColor = "#363636";
    heading.style.color = "#107AB0";
    paragraph.style.color = "white";
}