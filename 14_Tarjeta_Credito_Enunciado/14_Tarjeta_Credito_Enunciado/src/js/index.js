// Ejercicio 13 · Tarjeta de crédito.
// Escribe aquí tu solución. Consulta los requisitos en README.md.
const BRANDS = [
    { id: 'masterCard', name: 'Mastercard', regex: /^5[1-5]\d{14}$/, logo: './src/images/masterCard.png' },
    { id: 'visa', name: 'Visa', regex: /^4(\d{12}|\d{15})$/, logo: './src/images/visa.png' },
    { id: 'american', name: 'American Express', regex: /^3[47]\d{13}$/, logo: './src/images/american.png' },
];

const NAME_REGEX = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]{1,20}$/;
const DIGITS_REGEX = /^\d+$/;
const CVC_REGEX = /^\d{3}$/;
const MONTH_REGEX = /^(\d{4})-(0[1-9]|1[0-2])$/;

const form = document.getElementById('payment-form');
const payButton = document.getElementById('payButton');
const formMessage = document.getElementById('form-message');
const flipCard = document.getElementById('flip-card');
const cardName = document.getElementById('cardName');
const logoFront = document.getElementById('logo-front');
const cardFaces = document.querySelectorAll('.flip-card-front, .flip-card-back');

function validateCardNumber(raw) {
    if (raw === '') return { valid: false, message: 'Introduce el número de tarjeta.' };
    if (!DIGITS_REGEX.test(raw)) {
        return { valid: false, message: 'Usa solo dígitos del 0 al 9, sin espacios ni guiones.' };
    }
    if (!getBrand(raw)) {
        return {
            valid: false,
            message: 'Número no admitido: Mastercard (16 dígitos, empieza por 51-55), Visa (13 o 16, empieza por 4) o American Express (15, empieza por 34 o 37).',
        };
    }
    return { valid: true, message: '', value: raw };
}

function validateUsername(raw) {
    const name = raw.trim();
    if (name === '') return { valid: false, message: 'Introduce el nombre del titular.' };
    if (name.length > 20) return { valid: false, message: 'El titular no puede superar los 20 caracteres.' };
    if (!NAME_REGEX.test(name)) {
        return { valid: false, message: 'Solo se admiten letras, tildes, ü, ñ y espacios.' };
    }
    return { valid: true, message: '', value: name };
}

function validateExpireDate(raw) {
    if (raw === '') return { valid: false, message: 'Indica la fecha de caducidad.' };
    const match = MONTH_REGEX.exec(raw);
    if (!match) return { valid: false, message: 'La fecha de caducidad no es válida.' };
    const year = Number(match[1]);
    const month = Number(match[2]);
    const now = new Date();
    const current = now.getFullYear() * 12 + (now.getMonth() + 1);
    if (year * 12 + month < current) return { valid: false, message: 'La tarjeta está caducada.' };
    return { valid: true, message: '', value: `${match[2]}/${String(year).slice(-2)}` };
}

function validateCvc(raw) {
    if (raw === '') return { valid: false, message: 'Introduce el CVC.' };
    if (!DIGITS_REGEX.test(raw)) return { valid: false, message: 'El CVC solo admite dígitos del 0 al 9.' };
    if (!CVC_REGEX.test(raw)) return { valid: false, message: 'El CVC debe tener exactamente 3 dígitos.' };
    return { valid: true, message: '', value: raw };
}

function createField(id, cardId, validate) {
    const cardElement = document.getElementById(cardId);
    return {
        input: document.getElementById(id),
        error: document.getElementById(`${id}-error`),
        cardElement,
        initialText: cardElement.textContent,
        validate,
        touched: false,
    };
}

const fields = [
    createField('cardNumber', 'cardNumber-card', validateCardNumber),
    createField('username', 'username-card', validateUsername),
    createField('expireDate', 'expireDate-card', validateExpireDate),
    createField('cvc', 'cvc-card', validateCvc),
];

const initialCardName = cardName.textContent;


function getBrand(number) {
    return BRANDS.find((brand) => brand.regex.test(number)) || null;
}

function showFieldState(field, result) {
    if (!field.touched) {
        field.input.classList.remove('is-valid', 'is-invalid');
        field.input.removeAttribute('aria-invalid');
        field.error.textContent = '';
        return;
    }
    field.input.classList.toggle('is-valid', result.valid);
    field.input.classList.toggle('is-invalid', !result.valid);
    field.input.setAttribute('aria-invalid', String(!result.valid));
    field.error.textContent = result.valid ? '' : result.message;
}

function updateBrand(numberResult, numberValue) {
    const brand = numberResult.valid ? getBrand(numberValue) : null;
    cardFaces.forEach((face) => {
        BRANDS.forEach((b) => face.classList.remove(b.id));
        if (brand) face.classList.add(brand.id);
    });
    if (brand) {
        cardName.textContent = brand.name;
        logoFront.src = brand.logo;
        logoFront.alt = `Logo de ${brand.name}`;
        logoFront.hidden = false;
    } else {
        cardName.textContent = initialCardName;
        logoFront.hidden = true;
        logoFront.removeAttribute('src');
        logoFront.alt = '';
    }
}

function refresh() {
    let allValid = true;
    let numberResult = null;
    fields.forEach((field) => {
        const result = field.validate(field.input.value);
        if (field === fields[0]) numberResult = result;
        showFieldState(field, result);
        field.cardElement.textContent = result.valid ? result.value : field.initialText;
        if (!result.valid) allValid = false;
    });
    updateBrand(numberResult, fields[0].input.value);
    payButton.disabled = !allValid;
    return allValid;
}

function resetAll() {
    fields.forEach((field) => {
        field.touched = false;
    });
    flipCard.classList.remove('is-flipped');
    flipCard.setAttribute('aria-pressed', 'false');
    formMessage.textContent = '';
    refresh();
}

fields.forEach((field) => {
    field.input.addEventListener('input', () => {
        field.touched = true;
        formMessage.textContent = '';
        refresh();
    });
    field.input.addEventListener('change', () => {
        field.touched = true;
        formMessage.textContent = '';
        refresh();
    });
    field.input.addEventListener('blur', () => {
        field.touched = true;
        refresh();
    });
});

flipCard.addEventListener('click', () => {
    const flipped = flipCard.classList.toggle('is-flipped');
    flipCard.setAttribute('aria-pressed', String(flipped));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    fields.forEach((field) => {
        field.touched = true;
    });
    if (refresh()) {
        formMessage.textContent = 'Pago simulado correctamente. No se ha realizado ningún cargo.';
    } else {
        formMessage.textContent = 'Revisa los datos marcados antes de simular el pago.';
    }
});

form.addEventListener('reset', () => {
    setTimeout(resetAll, 0);
});

resetAll();