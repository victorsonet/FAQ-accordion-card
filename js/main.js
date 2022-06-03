let questionclick = document.querySelectorAll('.question-btn');

questionclick.forEach(button => {
    button.addEventListener('click', event => {
        button.classList.toggle('active');
        const buttonSibling = button.nextElementSibling;
        if(button.classList.contains("active")) {
            buttonSibling.style.maxHeight = buttonSibling.scrollHeight + "px";
        } else {
            buttonSibling.style.maxHeight = 0;
        }
    })
})