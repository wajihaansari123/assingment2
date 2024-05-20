const jsonString = `
{
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters": {
    "batter": [
      { "id": "1001", "type": "Regular" },
      { "id": "1002", "type": "Chocolate" },
      { "id": "1003", "type": "Blueberry" },
      { "id": "1004", "type": "Devil's Food" }
    ]
  },
  "topping": [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ]
}
`;
const data = JSON.parse(jsonString);

// Extract and display the required data
document.getElementById("demo").textContent = `${data.id}, ${data.type}, ${data.name}`;
document.getElementById("demo1").textContent = `${data.batters.batter[0].id}, ${data.batters.batter[0].type}`;
document.getElementById("demo2").textContent = `${data.batters.batter[3].id}, ${data.batters.batter[3].type}`;
document.getElementById("demo3").textContent = `${data.topping[4].id}, ${data.topping[4].type}`;
