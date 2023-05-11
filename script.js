// Animación al hacer scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
    } else {
      document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.remove('active');
    }
  });
});

// Envío del formulario
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Validación del nombre
  if (nameInput.value.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    nameInput.focus();
    return;
  }

  // Validación del correo electrónico
  if (emailInput.value.trim() === '') {
    alert('Por favor, ingresa tu correo electrónico.');
    emailInput.focus();
    return;
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    emailInput.focus();
    return; // Falta añadir el return para salir del evento en caso de error
  }

  // Envío del formulario
  // Aquí puedes agregar el código para enviar el formulario a tu servidor
});

