// Scripts

let skillz = [
    'coding',
    'UI/UX',
    'web',
    'DevOps',
    'Git',
    'Linux',
    'Windows',
    'JavaScript',
    'Python',
    'docker',
    'Angular',
    'database',
    'security',
    'data',
    'science',
    'apps',
    'networks',
    'servers',
    'engineering'
]
let randomSort = []
let n = 10; // Number of skillz at the same time
for (let i = 0; i < n; i++) { randomSort.push(i) }
generateBackground();
setInterval(generateBackground, 4000);
document.querySelector('.fullscreen-menu').style.display = 'none';
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

// Functions

function toggleMenu() {
    let menu = document.querySelector('.fullscreen-menu');
    let title = document.querySelector('.title');
    let menuBtn = document.querySelectorAll('.bar');

    if (menu.style.display == 'none') {
        // Menu button
        document.querySelector('.middle-bar').style.display = 'none';
        menuBtn[0].classList.add('close-btn-1');
        menuBtn[1].classList.add('close-btn-2');
        menuBtn[0].classList.remove('long-bar');
        menuBtn[1].classList.remove('long-bar');
        // Content
        title.classList.add('anim-fade-out');
        menu.style.display = 'flex';
    } else {
        // menu button
        document.querySelector('.middle-bar').style.display = 'block';
        menuBtn[0].classList.remove('close-btn-1');
        menuBtn[1].classList.remove('close-btn-2');
        menuBtn[0].classList.add('long-bar');
        menuBtn[1].classList.add('long-bar');
        // Content
        title.classList.remove('anim-fade-out');
        title.style.display = 'flex';
        menu.style.display = 'none';
    }
}

function generateBackground() {
    randomSort = shuffle(randomSort);
    skillz = shuffle(skillz);
    let bts = document.querySelectorAll('.back-text');

    for (let bt of bts) {
        bt.remove();
    }

    for (let i = 0; i < n; i++) {
        let yPosition = document.body.clientHeight / n * i;
        let xPosition = document.body.clientWidth / n * randomSort[i];
        newChild = document.createElement('div');
        newChild.classList.add('back-text');
        newChild.style.top = yPosition + 'px';
        newChild.style.left = xPosition + 'px';
        newChild.style.animation = i % 2 == 0 ? 'right-slide 4s linear': 'left-slide 4s linear';
        newChild.style.animationFillMode = 'forwards';
        newChild.innerHTML = skillz[i];
        document.body.appendChild(newChild);
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
