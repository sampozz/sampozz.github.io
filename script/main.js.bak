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


let bts = document.querySelectorAll('.back-text');

for (let bt of bts) {
    bt.innerHTML = choice(skillz);
}

gsap.timeline()
    .from('.bt-1', {x: -300, opacity: 0, duration: 0.5, ease: 'linear'})
    .to('.bt-1', {x: 500, duration: 4, ease: 'linear'})
    .to('.bt-1', {x: 800, opacity: 0, duration: 0.5, ease: 'linear', onComplete: replaceSkill})
    .repeat(-1);

gsap.timeline()
    .fromTo('.bt-2', {x: 800, opacity: 0}, {x: 500, opacity: 0.1, duration: 0.5, ease: 'linear'})
    .fromTo('.bt-2', {x: 500}, {x: 0, duration: 4, ease: 'linear'})
    .to('.bt-2', {x: -300, opacity: 0, duration: 0.5, ease: 'linear', onComplete: replaceSkill})
    .repeat(-1);


function replaceSkill() {
    let skill = choice(skillz);
    document.querySelector('.bt-1').innerHTML = skill;
    do {
        skill = choice(skillz);
    } while (skill == document.querySelector('.bt-1').innerHTML)
    document.querySelector('.bt-2').innerHTML = skill;
}

function choice(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}