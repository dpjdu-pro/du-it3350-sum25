console.log("✅ Connected to food.js!");
const appId = "a4d8d4a4";     // Replace with your Nutritionix App ID
const appKey = "b05d803a2597212e9a749bb57c321855";   // Replace with your Nutritionix App Key

function searchFood() {
  const food = document.getElementById("foodInput").value;

  fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-id": appId,
      "x-app-key": appKey
    },
    body: JSON.stringify({ query: food })
  })
  .then(res => res.json())
  .then(data => {
    const item = data.foods[0];
    document.getElementById("results").innerHTML = `
  <div class="card">
    <h2>${item.food_name}</h2>
    <table>
      <tr><td><strong>Qty</strong></td><td>${item.serving_qty} ${item.serving_unit}</td></tr>
      <tr><td><strong>Calories</strong></td><td>${item.nf_calories}</td></tr>
      <tr><td><strong>Fat</strong></td><td>${item.nf_total_fat}g</td></tr>
      <tr><td><strong>Sugar</strong></td><td>${item.nf_sugars}g</td></tr>
      <tr><td><strong>Protein</strong></td><td>${item.nf_protein}g</td></tr>
    </table>
  </div>
`;

  })
  .catch(err => {
    document.getElementById("results").innerHTML = "Oops! Something went wrong.";
    console.error(err);
  });
}
