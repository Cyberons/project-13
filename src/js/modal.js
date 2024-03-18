var emailInput = document.querySelector('.footer-form .email');
var commentsInput = document.querySelector('.footer-form .comments');
var message = document.querySelector('.message');
var sendButton = document.querySelector('.footer-form .send-btn');
var modalContainer = document.querySelector('.modal-container');
var closeButton = document.querySelector('.close-btn');

emailInput.addEventListener('blur', function() {
    if (emailInput.value.trim() === '') {
        // Якщо поле порожнє, не застосовуємо стилі і відображаємо порожнє повідомлення
        emailInput.classList.remove('error', 'success');
        message.textContent = '';
    } else if (!emailInput.checkValidity()) {
        // Якщо поле заповнене, але значення недійсне, застосовуємо стилі помилки
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        message.textContent = 'Invalid email, try again';
        message.classList.add('error-message');
        message.classList.remove('success-message');
    } else {
        // Якщо поле заповнене і значення дійсне, застосовуємо стилі успіху
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        message.textContent = 'Success!';
        message.classList.add('success-message');
        message.classList.remove('error-message');
    }
});

commentsInput.addEventListener('input', function() {
    if (commentsInput.value.length > 50) {
        commentsInput.value = commentsInput.value.substring(0, 50);
        commentsInput.classList.add('error');
    } else {
        commentsInput.classList.remove('error');
    }
});

sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (emailInput.value.trim() === '') {
        // Якщо поле порожнє, не відправляємо форму і відображаємо порожнє повідомлення
        message.textContent = '';
    } else if (!emailInput.checkValidity()) {
        // Якщо поле заповнене, але значення недійсне, не відправляємо форму і відображаємо помилку
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        message.textContent = 'Invalid email, try again';
        message.classList.add('error-message');
        message.classList.remove('success-message');
    } else {
        // Якщо поле заповнене і значення дійсне, відправляємо форму і очищаємо повідомлення
        modalContainer.style.display = 'block';
        message.textContent = '';
    }
});

closeButton.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});