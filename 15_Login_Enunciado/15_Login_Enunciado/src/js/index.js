// Datos ficticios para comprobar el acceso. No cambies sus valores.
const cuentaPrueba = {
  usuario: "player_one",
  email: "player@example.com",
  password: "Juego2026!",
};

// Escribe aquí tu solución siguiendo el README.md.
const formulario = document.getElementById('login-form');
const identityInput = document.getElementById('identity');
const passwordInput = document.getElementById('password');
const identityError = document.getElementById('identity-error');
const passwordError = document.getElementById('pasword-error');
const toggleErrorBtn = document.getElementById('toggle-pasword')

function validateIdentity(showError = true) {
  const val = identityInput.value.trim();
  let erorMsg = '';

  if (!val) {
    erorMsg = 'El usuario o email es OBLIGATORO';
  } else if (val.includes('@')) {
    const emailBien = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailBien.test(val) || (val.match(/@/g) || []).length > 1) {
      errorMsg = 'El formato del email no es válido (ej: usuario@dominio.com).';
    }
  } else {
    const userBien = /^[a-zA-Z0-9_]{3,20}$/;
    if (!userBien.test(val)) {
      errorMsg = 'El usuario debe tener entre 3 y 20 caracteres (letras, números y guion bajo).';
    }
  }

  if (showError) {
    identityError.textContent = errorMsg;
    identityInput.setAttribute('aria-invalid', errorMsg ? 'true' : 'false');
    if (errorMsg) {
      identityInput.classList.add('border-rose-500', 'focus:ring-rose-500');
      identityInput.classList.remove('border-slate-700', 'focus:ring-cyan-500');
    } else {
      identityInput.classList.remove('border-rose-500', 'focus:ring-rose-500');
      identityInput.classList.add('border-slate-700', 'focus:ring-cyan-500');
    }
  }
  return !errorMsg;
}
let identityHasError = false;
let passwordHasError = false;

identityInput.addEventListener('blur', () => {
  identityHasError = !validateIdentity(true);
});

identityInput.addEventListener('input', () => {
  clearStatusMessage();
  if (identityHasError) {
    identityHasError = !validateIdentity(true);
  }
});

passwordInput.addEventListener('blur', () => {
  passwordHasError = !validatePassword(true);
});

passwordInput.addEventListener('input', () => {
  clearStatusMessage();
  if (passwordHasError) {
    passwordHasError = !validatePassword(true);
  }
});