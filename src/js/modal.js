var emailInput = document.querySelector('.footer-form .email');
var commentsInput = document.querySelector('.footer-form .comments');
var message = document.querySelector('.message');
var sendButton = document.querySelector('.footer-form .send-btn');
var modalContainer = document.querySelector('.modal-container');
var closeButton = document.querySelector('.close-btn');


function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
    document.body.style.overflow = '';
}


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
        message.textContent = '';
    } else if (!emailInput.checkValidity()) {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        message.textContent = 'Invalid email, try again';
        message.classList.add('error-message');
        message.classList.remove('success-message');
    } else {
        disableBodyScroll();

        modalContainer.style.display = 'block';
        message.textContent = '';
        emailInput.value = '';
        commentsInput.value = '';
        emailInput.classList.remove('success', 'error'); 
        commentsInput.classList.remove('error');
    }
});

closeButton.addEventListener('click', function() {
    enableBodyScroll();
    modalContainer.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.querySelector('.footer-form .email');
    var commentsInput = document.querySelector('.footer-form .comments');
    var feedbackForm = document.querySelector('.footer-form');

    function saveStateToLocalStorage() {
        var state = {
            email: emailInput.value,
            comments: commentsInput.value
        };
        localStorage.setItem('feedback-form-state', JSON.stringify(state));
    }

    var savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        savedState = JSON.parse(savedState);
        emailInput.value = savedState.email;
        commentsInput.value = savedState.comments;
    }

    feedbackForm.addEventListener('input', function(event) {
        if (event.target.matches('.email, .comments')) {
            saveStateToLocalStorage();
        }
    });

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        localStorage.removeItem('feedback-form-state');

        var formData = {
            email: emailInput.value,
            comments: commentsInput.value
        };
        console.log(formData);

        emailInput.value = '';
        commentsInput.value = '';
    });
});
