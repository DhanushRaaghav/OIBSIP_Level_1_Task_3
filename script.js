document.getElementById("convert").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("inputUnit").value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let resultCelsius, resultFahrenheit, resultKelvin;

    if (inputUnit === "celsius") {
        resultCelsius = temperatureInput;
        resultFahrenheit = (temperatureInput * 9/5) + 32;
        resultKelvin = temperatureInput + 273.15;
    } else if (inputUnit === "fahrenheit") {
        resultCelsius = (temperatureInput - 32) * (5/9);
        resultFahrenheit = temperatureInput;
        resultKelvin = (temperatureInput - 32) * (5/9) + 273.15;
    } else if (inputUnit === "kelvin") {
        resultCelsius = temperatureInput - 273.15;
        resultFahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
        resultKelvin = temperatureInput;
    }

    document.getElementById("resultCelsius").innerText = `Celsius: ${resultCelsius.toFixed(2)} °C`;
    document.getElementById("resultFahrenheit").innerText = `Fahrenheit: ${resultFahrenheit.toFixed(2)} °F`;
    document.getElementById("resultKelvin").innerText = `Kelvin: ${resultKelvin.toFixed(2)} K`;
});