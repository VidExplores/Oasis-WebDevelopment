function convertTemperature() {
    const inputTemp = document.getElementById("inputTemperature").value;
    const inputUnit = document.getElementById("inputUnit").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(inputTemp) || inputTemp === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temp = parseFloat(inputTemp);
    let convertedTemp;

    switch (inputUnit) {
        case "Celsius":
            convertedTemp = temp; // already in Celsius
            break;
        case "Fahrenheit":
            convertedTemp = (temp - 32) * 5/9; // convert to Celsius
            break;
        case "Kelvin":
            convertedTemp = temp - 273.15; // convert to Celsius
            break;
        default:
            resultDiv.textContent = "Invalid unit selected.";
            return;
    }

    resultDiv.textContent = `${temp} ${inputUnit} is equal to ${convertedTemp.toFixed(2)} Celsius`;
}
