window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.getElementById("loan-amount")
  let years = document.getElementById("loan-years")
  let rate = document.getElementById("loan-rate")
  amount.value = 400,000
  years.value = 30
  rate.value = 4.25
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(values))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount
  let interest = (values.rate / 100) / 12
  let number = values.years * 12
  let monthlyPayment = (principle * interest) / (1 - ((1 + interest) ^ (-number)))
  return String(monthlyPayment).slice(0, monthlyPayment.indexof(".") + 2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let payment = document.getElementById("monthly-payment")
  payment.innerText = monthly
}
