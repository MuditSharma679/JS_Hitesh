const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = <span> ${bmi} </span>;
  }
});
