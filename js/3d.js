
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
    } else if (fahrenheitCheckbox.checked == false && celsiusCheckbox.checked==false) {
        celsiusCheckbox.checked = true;
    }
}

function changeConverterToFC() {
    var temperatureToChange = document.getElementById("temperatureToChange").value;
    if(fahrenheitCheckbox.checked == true) 
    {
        celsiusCheckbox.checked=false;
    } else if (fahrenheitCheckbox.checked == false && celsiusCheckbox.checked==false) {
        fahrenheitCheckbox.checked = true;
    }
}

function isValidForm() {
    var temperatureToChange = document.getElementById("temperatureToChange").value;
    var date = document.getElementById("date").value;
    var alertDate = document.getElementById("alert-date");
    var alertTemp = document.getElementById("alert-temperature");
    var result = false;

    if (temperatureToChange.length === 0 && !isValidDate(date)){
        alertDate.style.display = 'block';
        alertTemp.style.display = 'block';
    } else if(temperatureToChange.length === 0) {
        alertDate.style.display = 'none';
        alertTemp.style.display = 'block';
    } else if(!isValidDate(date)) {
        alertDate.style.display = 'block';
        alertTemp.style.display = 'none';
    } else if (!(temperatureToChange.length === 0 && !isValidDate(date))){
        alertDate.style.display = 'none';
        alertTemp.style.display = 'none';
        result =  true;
    }

    return result;
}




function convert() {
    var temperatureToChange = document.getElementById("temperatureToChange").value;
    var date = document.getElementById("date").value;
    var outputValue;
    var inputValue;
    if(isValidForm()) {
        if(celsiusCheckbox.checked == true) {
            inputValue = temperatureToChange + " degrees Celsius";
            outputValue = convertCelsiusToFahrenheit(temperatureToChange).toFixed(2) + " degrees Fahrenheit";
        }
            if(fahrenheitCheckbox.checked == true) {
            inputValue = temperatureToChange + " degrees Fahrenheit";
            outputValue = convertFahrenheitToCelsius(temperatureToChange).toFixed(2) + " degrees Celsius";
        }
        
        setResult(inputValue, outputValue)
        addRowToTable(date, inputValue, outputValue)
    }
}

function setResult(inputText, outputText) {
    document.getElementById("inputTemperature").innerHTML = inputText;
    document.getElementById("outputTemperature").innerHTML = outputText;
}

function addRowToTable(dateInput, inputText, outputText) {
    var tableDiv = document.getElementById("box__table_id");
    tableDiv.style.display = 'block';
    var table = document.getElementById("weatherTable__body");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var date = row.insertCell(0);
    var inputCell = row.insertCell(1);
    var outputCell = row.insertCell(2);
    date.innerHTML = dateInput;
    inputCell.innerHTML = inputText;
    outputCell.innerHTML = outputText;
}

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
  }