// Example temperature value in Celsius
const tempCelsius = 10;
const windKmph = 5; // Example wind speed value in km/h

// Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (9 / 5) * celsius + 32;

// Convert km/h to mph
const kmphToMph = (kmph) => kmph / 1.609344;

// Calculate Wind Chill in Fahrenheit
const calculateWindChill = (tFahrenheit, wMph) => {
  return (
    35.74 +
    0.6215 * tFahrenheit -
    35.75 * Math.pow(wMph, 0.16) +
    0.4275 * tFahrenheit * Math.pow(wMph, 0.16)
  );
};

// Get the DOM elements
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind");
const windChillElement = document.querySelector("#chill");

// Convert values to desired units
const tempFahrenheit = celsiusToFahrenheit(tempCelsius).toFixed(1);
const windMph = kmphToMph(windKmph).toFixed(1);

// Display the temperature and wind speed
temperatureElement.innerHTML = `${tempFahrenheit} °F`;
windSpeedElement.innerHTML = `${windMph} mph`;

// Calculate and display the wind chill
if (tempFahrenheit <= 50 && windMph > 3) {
  const windChillFahrenheit = calculateWindChill(
    tempFahrenheit,
    windMph
  ).toFixed(1);
  windChillElement.innerHTML = `${windChillFahrenheit} °F`;
} else {
  windChillElement.innerHTML = "N/A";
}

// Debugging
console.log("Temperature in Fahrenheit:", tempFahrenheit);
console.log("Wind Speed in mph:", windMph);
console.log("Wind Chill:", windChillElement.innerHTML);
