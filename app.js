function appendToDisplay(value) {
    var displayValue = document.getElementById('display').value;
    // Son karakter bir operatör ise ve yeni eklenecek değer de bir operatör ise,
    // yeni eklenecek operatörü eklemeyelim.
    if (/[\/*\-+]$/.test(displayValue) && /[\/*\-+]/.test(value)) {
        return;
    }
    document.getElementById('display').value += value;
}


function clearEntry() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

// '=' tuşuna basıldığında hesaplama yap
document.addEventListener('keydown', function(event) {
    if (event.key === '=' || event.key === 'Enter') {
        calculate();
    }
});
function toggleDarkMode() {
    var darkModeElement = document.getElementById('dark-mode');
    darkModeElement.disabled = !darkModeElement.disabled;
}

function toggleLightMode() {
    var darkModeElement = document.getElementById('dark-mode');
    darkModeElement.disabled = true;
}

