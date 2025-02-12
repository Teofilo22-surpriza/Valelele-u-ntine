function accept() {
    const content = document.querySelector('.content');
    content.innerHTML = '<p class="heart">❤️❤️❤️</p><p>HIHI NU O SĂ O REGREȚI, MULTUMESC MULT DE TOT!</p>';
    document.body.style.backgroundColor = "#ffcccc";
    const heart = document.querySelector('.heart');
    heart.style.animation = 'heart-float 1s infinite';
}

function reject() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.textContent = 'Creca da boss');
    accept();
}
