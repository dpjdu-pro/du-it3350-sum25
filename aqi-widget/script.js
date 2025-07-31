function loadAQIData() {
  // Mock data (normally you'd fetch this from API)
  const mockData = {
    city: "Pittsburgh",
    aqi: Math.floor(Math.random() * 300), // Random AQI for demo
  };

  const widget = document.getElementById("aqiWidget");
  const aqiValue = mockData.aqi;
  let status = "";
  let iconUrl = "";

  // Determine status and color
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

  document.getElementById("city").innerText = `City: ${mockData.city}`;
  document.getElementById("aqi").innerText = `AQI: ${aqiValue}`;
  document.getElementById("status").innerText = `Status: ${status}`;

  const icon = document.getElementById("icon");
  icon.src = iconUrl;
  icon.style.display = "inline-block";
}

// Initial load
loadAQIData();
