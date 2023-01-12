
function practiceCelsiusToFahrenheit(celsius) {
    const fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;
}

const celsius = 60;

const fahrenheit = practiceCelsiusToFahrenheit(celsius);
console.log('Fahrenheit: ' + fahrenheit + ' F');