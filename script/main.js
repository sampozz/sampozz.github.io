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
    'database'
]
let randomSort = []
for (let i = 0; i < skillz.length; i++) {
    randomSort.push(i);
}

generateBackground();
setInterval(generateBackground, 4000);

function generateBackground() {
    randomSort = shuffle(randomSort);
    skillz = shuffle(skillz);
    let n = 10;
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
