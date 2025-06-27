// Увеличение фотографии при клике
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});

// Увеличение аватара при клике
const avatar = document.getElementById('profile-avatar');
if (avatar) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  avatar.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = avatar.src;
    lightboxImg.alt = avatar.alt;
  });
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = 'Пожалуйста, заполните все поля.';
    formMessage.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Введите корректный email адрес.';
    formMessage.style.color = 'red';
    return;
  }

  // Показываем уведомление
  formMessage.textContent = 'Спасибо! Ваше сообщение отправлено.';
  formMessage.style.color = 'green';

  // Очищаем форму
  this.reset();

  // Скрываем сообщение через 5 секунд
  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});