// Calculator functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function squareroot() {
    try {
        const display = document.getElementById('display');
        display.value = Math.sqrt(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function percentage() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value)*100+'%';
        
    } catch (error) {
        display.value = 'Error';
    }
}

// Background color changer function
function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#f5deb3', '#ff6347', '#8fbc8f', '#4682b4'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.header.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
