function fahrenheitToCelsius(fahrenheit) {
    const celsius = (5 * (fahrenheit - 32)) / 9;
    return celsius;
}

let fahrenheit = 98.6;

const celsiusResult = fahrenheitToCelsius(fahrenheit);
console.log('Celsius: ' + celsiusResult + ' C');

var fahrenheitTemp = 104;

var Result = fahrenheitToCelsius(fahrenheitTemp);
console.log('Celsius: ' + Result + ' C');