//Array
var pogoda = ['Słonecznie', 'Przejaśnienia', 'Pochmurno']

// Temperature between -40 and 40 degrees Celsius
function getRandomTemperature() {
    var isMinus = Math.random() > 0.5 ? true : false;
    var temperature = Math.floor(Math.random() * (40 - 0 + 1)) + 0;
    return isMinus && temperature != 0 ? temperature * (-1) : temperature
}

function getRandomWeather() {
    return pogoda[Math.floor(Math.random() * (pogoda.length))];
}

document.getElementById("countingDown").innerHTML = '5'; 
var counter = 4;
countingDown();
function countingDown() {          
    setTimeout(function() {  
        document.getElementById("countingDown").innerHTML = counter; 
        if (counter > 0) {            
            counter--;
            countingDown();   
        } else if(counter === 0) {
            document.getElementById("countingDown").innerHTML = ""; 
        }                 
    }, 1000)
}

setTimeout(function(){
    document.getElementById("information").innerHTML = getRandomWeather() + ", temperatura " + getRandomTemperature() + " stopni";    
}, 5000);



