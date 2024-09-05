function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerText.length === 1 || display.innerText === 'Error') {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch {
        display.innerText = 'Error';
    }
}
