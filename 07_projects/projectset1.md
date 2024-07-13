# Projects related to DOM

## project link

# Solution code

## Project 1

```javascript
 console.log("Mudit)
 const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2 solution

```javascript
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
```
