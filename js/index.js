const mainVisual = document.querySelector('.main_visual');



setInterval(()=>{

    const heart = document.createElement('div');

    heart.innerHTML = '♡';

    heart.classList.add('heart_effect');

    heart.style.left =
    Math.random() * window.innerWidth + 'px';

    heart.style.top = '900px';

    heart.style.fontSize =
    Math.random() * 30 + 15 + 'px';

    mainVisual.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000);

},300);



setInterval(()=>{

    const sparkle = document.createElement('div');

    sparkle.innerHTML = '✧';

    sparkle.classList.add('sparkle_effect');

    sparkle.style.left =
    Math.random() * window.innerWidth + 'px';

    sparkle.style.top =
    Math.random() * 900 + 'px';

    sparkle.style.fontSize =
    Math.random() * 20 + 10 + 'px';

    mainVisual.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2000);

},500);