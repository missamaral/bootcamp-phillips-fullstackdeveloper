const mario = document.querySelector('.mario');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let score = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 250) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }  else {
                    position -= 20;
                    mario.style.bottom = position + 'px';
                }
            }, 20);
        } else {
           position += 20;
           mario.style.bottom = position + 'px'; 
        }
    }, 20);
}

function createGoomba() {
    const goomba = document.createElement('div');
    let goombaPosition = 1500;
    let randomTime = Math.random() * 6000;

    goomba.classList.add('goomba');
    goomba.style.left = 1000 + 'px';
    background.appendChild(goomba);

    let leftInterval = setInterval(() => {
        if (goombaPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(goomba);
            score += 100;
            document.getElementById("score").innerHTML = score;
        } else if (goombaPosition > 0 && goombaPosition < 80 && position < 80) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game Over!<br>Score: ' + score + '</h1>';
        } else {
            goombaPosition -= 10;
            goomba.style.left = goombaPosition + 'px';
        }
    }, 20);

    setTimeout(createGoomba, randomTime);
}

createGoomba();

document.addEventListener('keyup', handleKeyUp);