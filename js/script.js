// Script for Product of Numbers

// Get Elements

// Inputs
const numInput = document.getElementById("numInput");
const intInput = document.getElementById("intInput");

// Input Form
const inputForm = document.getElementById("inputForm");


function getResult() {

  // Get inputs
  let userNum = Number(numInput.value);
  let userInt = Number(intInput.value);

  // Initalize Product Sum
  let productSum = 0;

  // Use for loop to calculate product
  for (let counter = 0; counter < Math.abs(userInt); counter++) {

    // Check if userInt is positive / non-negative
    if (userInt >= 0) {
      // Increment Product Sum
      productSum += userNum;
    }
    // else [ userInt is negative ]
    else {
      // Decrement Product Sum
      productSum -= userNum;
    }

    // This code used multiplication so I didn't use this
    // productSum += Math.sign(userInt) * userNum;
  }

  // Display Result
  outputResult.innerHTML = `${userNum} x ${userInt} = ${Number(productSum.toFixed(2))}`;

  return;
}


// Connect form submit to getResult()
inputForm.onsubmit = () => {
  getResult();
  // Prevents page from refreshing
  return false;
}