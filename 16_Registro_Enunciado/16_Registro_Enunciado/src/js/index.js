// Simula los nombres de usuarios que ya están registrados.
const usuariosRegistrados = ["player_one", "pixelmaster", "dragonborn", "lunagamer"];

// Escribe aquí tu solución siguiendo el README.md.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const birthdateInput = document.getElementById('birthdate');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const usernameError = document.getElementById('username-error');
    const usernameStatus = document.getElementById('username-status');
    const emailError = document.getElementById('email-error');
    const birthdateError = document.getElementById('birthdate-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const registerMessage = document.getElementById('register-message');

    let existingUsernames = ['player_one', 'pixelmaster', 'dragonborn', 'lunagamer'];

    function getUsernameError(value) {
        const trimmed = value.trim();
        if (!trimmed) return 'El nombre de usuario no puede estar vacío.';
        if (trimmed.length < 3 || trimmed.length > 20) {
            return 'Debe tener entre 3 y 20 caracteres.';
        }
        const regex = /^[A-Za-z0-9_]+$/;
        if (!regex.test(trimmed)) {
            return 'Solo puede contener letras, números y guion bajo (_).';
        }
        return '';
    }

    function checkUsername() {
        const rawValue = usernameInput.value;
        const trimmed = rawValue.trim();
        const formatError = getUsernameError(rawValue);

        if (formatError) {
            usernameInput.setAttribute('aria-invalid', 'true');
            usernameError.textContent = formatError;
            usernameStatus.textContent = '';
            return false;
        }

        const isTaken = existingUsernames.some(
            (user) => user.toLowerCase() === trimmed.toLowerCase()
        );

        if (isTaken) {
            usernameInput.setAttribute('aria-invalid', 'true');
            usernameError.textContent = 'Este nombre de usuario ya está en uso.';
            usernameStatus.textContent = '';
            return false;
        } else {
            usernameInput.setAttribute('aria-invalid', 'false');
            usernameError.textContent = '';
            usernameStatus.textContent = 'Nombre disponible';
            return true;
        }
    }

    function validateEmail(eager = false) {
        const value = emailInput.value.trim();
        if (!value) {
            if (eager) {
                emailInput.setAttribute('aria-invalid', 'true');
                emailError.textContent = 'El email no puede estar vacío.';
            }
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const parts = value.split('@');
        const hasSingleAt = parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;

        if (!hasSingleAt || !emailRegex.test(value)) {
            if (eager) {
                emailInput.setAttribute('aria-invalid', 'true');
                emailError.textContent = 'Introduce un formato de email válido (ej: usuario@dominio.com).';
            }
            return false;
        }

        emailInput.setAttribute('aria-invalid', 'false');
        emailError.textContent = '';
        return true;
    }

    function validateBirthdate(eager = false) {
        const value = birthdateInput.value;
        if (!value) {
            if (eager) {
                birthdateInput.setAttribute('aria-invalid', 'true');
                birthdateError.textContent = 'La fecha de nacimiento es obligatoria.';
            }
            return false;
        }

        const selectedDate = new Date(value + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isNaN(selectedDate.getTime()) || selectedDate > today) {
            if (eager) {
                birthdateInput.setAttribute('aria-invalid', 'true');
                birthdateError.textContent = 'La fecha debe ser real y anterior o igual a hoy.';
            }
            return false;
        }

        birthdateInput.setAttribute('aria-invalid', 'false');
        birthdateError.textContent = '';
        return true;
    }

    function validatePassword(eager = false) {
        const value = passwordInput.value;
        if (!value) {
            if (eager) {
                passwordInput.setAttribute('aria-invalid', 'true');
                passwordError.textContent = 'La contraseña no puede estar vacía.';
            }
            return false;
        }

        if (/\s/.test(value)) {
            if (eager) {
                passwordInput.setAttribute('aria-invalid', 'true');
                passwordError.textContent = 'La contraseña no puede contener espacios en blanco.';
            }
            return false;
        }

        if (value.length < 8 || value.length > 64) {
            if (eager) {
                passwordInput.setAttribute('aria-invalid', 'true');
                passwordError.textContent = 'Debe tener entre 8 y 64 caracteres.';
            }
            return false;
        }

        const hasLower = /[a-z]/.test(value);
        const hasUpper = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);

        if (!hasLower || !hasUpper || !hasNumber) {
            if (eager) {
                passwordInput.setAttribute('aria-invalid', 'true');
                passwordError.textContent = 'Debe incluir al menos una minúscula, una mayúscula y un número.';
            }
            return false;
        }

        passwordInput.setAttribute('aria-invalid', 'false');
        passwordError.textContent = '';
        return true;
    }

    function validateConfirmPassword(eager = false) {
        const value = confirmPasswordInput.value;
        const passwordValue = passwordInput.value;

        if (!value) {
            if (eager) {
                confirmPasswordInput.setAttribute('aria-invalid', 'true');
                confirmPasswordError.textContent = 'Debes confirmar la contraseña.';
            }
            return false;
        }

        if (value !== passwordValue) {
            if (eager) {
                confirmPasswordInput.setAttribute('aria-invalid', 'true');
                confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
            }
            return false;
        }

        confirmPasswordInput.setAttribute('aria-invalid', 'false');
        confirmPasswordError.textContent = '';
        return true;
    }

    let hasSubmittedOrBlurred = {
        username: false,
        email: false,
        birthdate: false,
        password: false,
        confirmPassword: false
    };

    usernameInput.addEventListener('input', () => {
        checkUsername();
    });

    emailInput.addEventListener('input', () => {
        if (hasSubmittedOrBlurred.email) validateEmail(true);
    });
    emailInput.addEventListener('blur', () => {
        hasSubmittedOrBlurred.email = true;
        validateEmail(true);
    });

    birthdateInput.addEventListener('input', () => {
        if (hasSubmittedOrBlurred.birthdate) validateBirthdate(true);
    });
    birthdateInput.addEventListener('blur', () => {
        hasSubmittedOrBlurred.birthdate = true;
        validateBirthdate(true);
    });

    passwordInput.addEventListener('input', () => {
        validatePassword(hasSubmittedOrBlurred.password);

        if (hasSubmittedOrBlurred.confirmPassword || confirmPasswordInput.value) {
            validateConfirmPassword(hasSubmittedOrBlurred.confirmPassword);
        }
    });
    passwordInput.addEventListener('blur', () => {
        hasSubmittedOrBlurred.password = true;
        validatePassword(true);
    });

    confirmPasswordInput.addEventListener('input', () => {
        if (hasSubmittedOrBlurred.confirmPassword) validateConfirmPassword(true);
    });
    confirmPasswordInput.addEventListener('blur', () => {
        hasSubmittedOrBlurred.confirmPassword = true;
        validateConfirmPassword(true);
    });

    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('aria-controls');
            const inputField = document.getElementById(targetId);
            const isHidden = inputField.type === 'password';

            inputField.type = isHidden ? 'text' : 'password';
            button.setAttribute('aria-pressed', isHidden ? 'true' : 'false');

            const fieldName = targetId === 'password' ? 'contraseña' : 'confirmación de contraseña';
            button.setAttribute('aria-label', isHidden ? `Ocultar ${fieldName}` : `Mostrar ${fieldName}`);
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        Object.keys(hasSubmittedOrBlurred).forEach(key => {
            hasSubmittedOrBlurred[key] = true;
        });

        const isUserValid = checkUsername();
        const isEmailValid = validateEmail(true);
        const isBirthdateValid = validateBirthdate(true);
        const isPasswordValid = validatePassword(true);
        const isConfirmValid = validateConfirmPassword(true);

        if (!(isUserValid && isEmailValid && isBirthdateValid && isPasswordValid && isConfirmValid)) {
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }

        const finalUsername = usernameInput.value.trim();
        existingUsernames.push(finalUsername);

        registerMessage.textContent = 'Registro simulado completado';

        form.reset();
        usernameStatus.textContent = '';

        [usernameInput, emailInput, birthdateInput, passwordInput, confirmPasswordInput].forEach(input => {
            input.removeAttribute('aria-invalid');
        });
        document.querySelectorAll('.toggle-password').forEach(button => {
            const targetId = button.getAttribute('aria-controls');
            const inputField = document.getElementById(targetId);
            inputField.type = 'password';
            button.setAttribute('aria-pressed', 'false');
            const fieldName = targetId === 'password' ? 'contraseña' : 'confirmación de contraseña';
            button.setAttribute('aria-label', `Mostrar ${fieldName}`);
        });

        Object.keys(hasSubmittedOrBlurred).forEach(key => {
            hasSubmittedOrBlurred[key] = false;
        });
    });
});