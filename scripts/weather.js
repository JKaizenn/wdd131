document.addEventListener("DOMContentLoaded", function () {
  // Get the current year and update the footer
var currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = currentYear;
  // Get the last modified date of the document and update the footer
var lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

});

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are met for viable wind chill calculations
    if ((temperature <= 10 && temperatureUnit === 'C') || (temperature <= 50 && temperatureUnit === 'F')) {
        if ((windSpeed > 4.8 && windSpeedUnit === 'km/h') || (windSpeed > 3 && windSpeedUnit === 'mph')) {
            // Calculate windchill factor
            let windChill;
            if (temperatureUnit === 'C') {
                windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            } else {
                windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            }
            return windChill.toFixed(1); // Return windchill factor rounded to one decimal place
        }
    }
    return "N/A"; // Return "N/A" if conditions are not met
}

// Example usage
let temperature = 10; // Example temperature in Celsius
let windSpeed = 10; // Example wind speed in km/h
let temperatureUnit = 'C'; // Example temperature unit
let windSpeedUnit = 'km/h'; // Example wind speed unit

let windChillFactor = calculateWindChill(temperature, windSpeed);
console.log("Windchill Factor: " + windChillFactor);
