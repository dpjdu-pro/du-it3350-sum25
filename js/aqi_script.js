function handleCustomAQI() {
  loadAQIData();
}

function loadAQIData() {
  const input = document.getElementById("aqiInput").value;
  const widget = document.getElementById("aqiWidget");

  if (input.trim() === "" || isNaN(input)) {
    alert("Please enter a valid number for AQI.");
    return;
  }

  const aqiValue = parseInt(input);

  if (aqiValue < 0) {
    alert("AQI cannot be negative.");
    return;
  }

  let status = "";
  let iconUrl = "";

  if (aqiValue <= 50) {
    status = "Good";
    widget.className = "widget good";
    iconUrl = "https://img.icons8.com/emoji/48/000000/sun-emoji.png";
  } else if (aqiValue <= 100) {
    status = "Moderate";
    widget.className = "widget moderate";
    iconUrl = "https://img.icons8.com/emoji/48/000000/cloud-emoji.png";
  } else {
    status = "Unhealthy";
    widget.className = "widget unhealthy";
    iconUrl = "https://img.icons8.com/emoji/48/000000/fire-emoji.png";
  }

  document.getElementById("city").innerText = "City: Pittsburgh";
  document.getElementById("aqi").innerText = `AQI: ${aqiValue}`;
  document.getElementById("status").innerText = `Status: ${status}`;
  const icon = document.getElementById("icon");
  icon.src = iconUrl;
  icon.style.display = "inline-block";
}
