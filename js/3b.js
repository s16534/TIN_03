
var celsiusCheckbox = document.getElementById("celsiusCheckbox");
var fahrenheitCheckbox = document.getElementById("fahrenheitCheckbox");

function convertCelsiusToFahrenheit(celsius) {
    return celsius/5*9+32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9;
}

function changeConverterToCF() {
    var temperatureToChange = document.getElementById("temperatureToChange").value;
    if(celsiusCheckbox.checked == true) {
        fahrenheitCheckbox.checked=false;
        if(temperatureToChange.length === 0) {
            alert("Field is empty.")
        } else {
            convert();
        }
    } else if (fahrenheitCheckbox.checked == false && celsiusCheckbox.checked==false) {
        celsiusCheckbox.checked = true;
    }
}

function changeConverterToFC() {
    var temperatureToChange = document.getElementById("temperatureToChange").value;
    if(fahrenheitCheckbox.checked == true) 
    {
        celsiusCheckbox.checked=false;
        if(temperatureToChange.length === 0) {
            alert("Field is empty.")
        } else {
            convert();
        }
    } else if (fahrenheitCheckbox.checked == false && celsiusCheckbox.checked==false) {
        fahrenheitCheckbox.checked = true;
    }
}

function convert() {
    var temperatureToChange = document.getElementById("temperatureToChange").value;
    var outputValue;
    var inputValue;

    if(celsiusCheckbox.checked == true) {
        inputValue = temperatureToChange + " degrees Celsius";
        outputValue = convertCelsiusToFahrenheit(temperatureToChange).toFixed(2) + " degrees Fahrenheit";
    }
        if(fahrenheitCheckbox.checked == true) {
        inputValue = temperatureToChange + " degrees Fahrenheit";
        outputValue = convertFahrenheitToCelsius(temperatureToChange).toFixed(2) + " degrees Celsius";
    }
    
        if (isNaN(temperatureToChange)) { 
        alert("Please only enter numeric characters only! (Allowed input:0-9)")
        } 
    setResult(inputValue, outputValue)
}

function setResult(inputText, outputText) {
    document.getElementById("inputTemperature").innerHTML = inputText;
    document.getElementById("outputTemperature").innerHTML = outputText;
}