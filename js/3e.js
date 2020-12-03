var temperatury = [];

function setRandomTemperature() {
    for(var i = 0; i < 8; i++) {
        temperatury.push(Math.floor(Math.random() * (20 - 0 + 1)) + 0);
    }
}

class Prognoza {
    constructor(miejscowosc, dzienTygodnia, temperatury) {
        this.miejscowosc = miejscowosc;
        this.dzienTygodnia = dzienTygodnia;
        this.temperatury = temperatury;
    }

    averageTemperature() {
        var sum = 0;
        for (const temperatura of this.temperatury) {
            sum += parseInt(temperatura)
        }
        return sum/this.temperatury.length;
    }
}

var p;


function createPrognoza() {
    p = new Prognoza();
    p.miejscowosc = document.getElementById("city").value;
    p.dzienTygodnia = document.getElementById("dateOfWeek").value
    p.temperatury = [];
    
    document.getElementById("choosenCity").innerHTML = `${p.miejscowosc}`;
    document.getElementById("choosenDay").innerHTML = `${p.dzienTygodnia}`;
    document.getElementById("averageTemperature").innerHTML = p.temperatury + ' degrees Celsius';

    document.getElementById("create").style.display = "none";
    document.getElementById("prognoza_information").style.display = "flex";
    document.getElementById("addTemperature").style.display = "flex";
}

function addTemperature() {
    var temperatura = document.getElementById("temperature").value;
    p.temperatury.push(temperatura);
    document.getElementById("averageTemperature").innerHTML = p.averageTemperature().toFixed(0) + ' degrees Celsius';
    if(p.temperatury.length === 8) {
        document.getElementById("btn-add").disabled = true;
    }

    var id= p.temperatury.length-1;
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-" + 
                    (currentdate.getMonth()+1) +"-"+
                    format(currentdate.getDate()) + " " +
                    format((id)*3) + ":00";
    var table = document.getElementById("weatherTable__body").innerHTML;
    document.getElementById("weatherTable__body").innerHTML = table + `
        <tr>
            <td>${datetime}</td>
            <td id="${id}">${temperatura} degrees Celsius</td>
            <td>
                <button type="button" class="btn btn-white" onclick='edit(${id})'>Edit temperature</button> 
            </td>
        </tr>
    `
}

function format(value) {
    value = value + '';
    if (value.length < 2) 
        value = '0' + value;
    return value;
}

function edit(id) {
    var modal = document.getElementById("modalBox");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
    document.getElementById("editInModal").innerHTML = `
        <label class="box__input__label" for="temperature">New temperature:</label>
        <input class="box__input" id="newTemperature" type="number" placeholder="degrees Celsius">
        <button type="button" class="btn" onclick='editTemperature(${id})'>Edit temperature</button> 
    `;
}


function editTemperature(id) {
    var newTemperature = document.getElementById("newTemperature").value;
    document.getElementById(id).innerHTML = newTemperature + ' degrees Celsius';
    p.temperatury[id] = newTemperature;
    document.getElementById("averageTemperature").innerHTML = p.averageTemperature().toFixed(0) + ' degrees Celsius';
    document.getElementById("modalBox").style.display = "none";
}