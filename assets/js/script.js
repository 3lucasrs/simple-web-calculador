const visorCalculateEl = document.querySelector('.visor-calculate');
const visorResultEl = document.querySelector('.visor-result');
let value = '';


const reset = () => {
    visorCalculateEl.innerHTML = null;
    visorResultEl.innerHTML = '0';
    value = '';
}

const result = () => {
    try {
        visorResultEl.innerHTML = eval(value);
    } catch (error) {
        console.log(`Erro de operação, dados inválidos!\n${error}`);
    }
}

const moreless = () => {
    visorCalculateEl.innerHTML += '-';
}

const percent = () => {
    try {
        visorCalculateEl.innerHTML += '%';
        let number = parseFloat(visorCalculateEl.innerHTML);
        visorResultEl.innerHTML = (number / 100);
    } catch (error) {
        console.log(`Erro de operação, dados inválidos!\n${error}`);
    }
}

const insert = (s) => {
    visorCalculateEl.innerHTML += s;
    value += s;
}

const deleteLast = () => {
    value = value.substring(0, value.length - 1);
    visorCalculateEl.innerHTML = value;
}
