// Variables

// button nav
const body = document.body;
const btn = document.querySelector('.mobile-nav');
const navBtn = document.getElementById('nI');
const navUl = document.getElementById('navItems');
const sunMoon = document.getElementById('nav-eye');


// button dark mode
const dmode = document.getElementById('nE');
const wrapDiv = document.getElementById('inner-wrap');

// Arrays

let Skills = new Array();

Skills[0] = document.getElementById('sT01');
Skills[1] = document.getElementById('sT02');
Skills[2] = document.getElementById('sT03');
Skills[3] = document.getElementById('sT04');
Skills[4] = document.getElementById('sT05');
Skills[5] = document.getElementById('sT06');
Skills[6] = document.getElementById('sT07');
Skills[7] = document.getElementById('sT08');
Skills[8] = document.getElementById('sT09');

let skillsImg = new Array();

skillsImg[0] = document.getElementById('sImg1');
skillsImg[1] = document.getElementById('sImg2');
skillsImg[2] = document.getElementById('sImg3');
skillsImg[3] = document.getElementById('sImg4');
skillsImg[4] = document.getElementById('sImg5');
skillsImg[5] = document.getElementById('sImg6');
skillsImg[6] = document.getElementById('sImg7');
skillsImg[7] = document.getElementById('sImg8');
skillsImg[8] = document.getElementById('sImg9');

let projectImgs = new Array();

projectImgs[0] = document.getElementById('html1');
projectImgs[1] = document.getElementById('html2');
projectImgs[2] = document.getElementById('html3');
projectImgs[3] = document.getElementById('html4');
projectImgs[4] = document.getElementById('html5');
projectImgs[5] = document.getElementById('css1');
projectImgs[6] = document.getElementById('css2');
projectImgs[7] = document.getElementById('css3');
projectImgs[8] = document.getElementById('css4');
projectImgs[9] = document.getElementById('css5');
projectImgs[10] = document.getElementById('js1');
projectImgs[11] = document.getElementById('js2');
projectImgs[12] = document.getElementById('js3');
projectImgs[13] = document.getElementById('js4');
projectImgs[14] = document.getElementById('js5');
projectImgs[15] = document.getElementById('git1');
projectImgs[16] = document.getElementById('git2');
projectImgs[17] = document.getElementById('git3');
projectImgs[18] = document.getElementById('git4');
projectImgs[19] = document.getElementById('git5');
projectImgs[20] = document.getElementById('sass1');
projectImgs[21] = document.getElementById('sass2');
projectImgs[22] = document.getElementById('sass3');
projectImgs[23] = document.getElementById('sass4');
projectImgs[24] = document.getElementById('php1');
projectImgs[25] = document.getElementById('react1');
projectImgs[26] = document.getElementById('wp1');









// Counter 
let counter = 1;

// container variables
const container01 = document.getElementById('container-01');
const container02 = document.getElementById('container-02');
const container03 = document.getElementById('container-03');
const container04 = document.getElementById('container-04');
const container05 = document.getElementById('container-05');




btn.addEventListener('click', function(){
    body.classList.toggle('show');
});


dmode.addEventListener('click', function(){
    counter++;
    if (counter%2 == 0) {
        containStyleDark();
    }
    else {
        containStyleLight();
    }
});

function containStyleDark() {
    Skills.forEach(skill => {
        skill.style.color = "white";
    });
    skillsImg.forEach(skillImg => {
        skillImg.style.fill = "wheat";
    });
    projectImgs.forEach(pjImg => {
        pjImg.style.fill = "wheat";
    });
    sunMoon.style.fill = "white";
    wrapDiv.style.backgroundColor = "#363636";
    wrapDiv.style.backgroundImage = "url(#363636)";
    container01.style.backgroundColor = '#363636';
    container02.style.backgroundColor = '#363636';
    container03.style.backgroundColor = '#363636';
    container04.style.backgroundColor = '#363636';
    container05.style.backgroundColor = '#363636';
    container01.style.color = 'whitesmoke';
    container02.style.color = 'whitesmoke';
    container03.style.color = 'whitesmoke';
    container04.style.color = 'whitesmoke';
    container05.style.color = 'whitesmoke';
}

function containStyleLight() {
    Skills.forEach(skill => {
        skill.style.color = "#363636";
    });
    skillsImg.forEach(skillImg => {
        skillImg.style.fill = "#363636";
    });
    projectImgs.forEach(pjImg => {
        pjImg.style.fill = "#363636";
    });
    wrapDiv.style.backgroundColor = "white";
    wrapDiv.style.backgroundPosition = "center";
    wrapDiv.style.backgroundAttachment = "fixed";
    container01.style.backgroundColor = 'white';
    container02.style.backgroundColor = 'white';
    container03.style.backgroundColor = 'white';
    container04.style.backgroundColor = 'white';
    container05.style.backgroundColor = 'white';
    container01.style.color = '#363636';
    container02.style.color = '#363636';
    container03.style.color = '#363636';
    container04.style.color = '#363636';
    container05.style.color = '#363636';
}