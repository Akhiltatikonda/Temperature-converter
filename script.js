function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
  
    let celsius, fahrenheit, kelvin;
  
    if (isNaN(inputTemp)) {
      alert("Please enter a valid number!");
      return;
    }
  
    if (inputUnit === "Celsius") {
      celsius = inputTemp;
      fahrenheit = (inputTemp * 9/5) + 32;
      kelvin = inputTemp + 273.15;
    } else if (inputUnit === "Fahrenheit") {
      celsius = (inputTemp - 32) * 5/9;
      fahrenheit = inputTemp;
      kelvin = (inputTemp - 32) * 5/9 + 273.15;
    } else if (inputUnit === "Kelvin") {
      celsius = inputTemp - 273.15;
      fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
      kelvin = inputTemp;
    }
  
    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
  }
  