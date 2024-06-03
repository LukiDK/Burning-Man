document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ticketForm");
  const quantityInputs = document.querySelectorAll(".quantity input");
  const totalAmount = document.querySelector(".total-amount");
  const prices = [2000, 1000, 1000];

  // Update total amount
  function updateTotal() {
    let total = 0;
    quantityInputs.forEach((input, index) => {
      total += input.value * prices[index];
    });
    totalAmount.textContent = `${total} .-`;
  }

  // Add event listeners to quantity buttons
  document.querySelectorAll(".quantity button").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input");
      let value = parseInt(input.value);
      if (this.classList.contains("minus") && value > 0) {
        value--;
      } else if (this.classList.contains("plus")) {
        value++;
      }
      input.value = value;
      updateTotal();
    });
  });

  // Form validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const address = document.getElementById("address").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvc = document.getElementById("cvc").value.trim();

    // Basic validation
    if (
      fullName === "" ||
      email === "" ||
      phoneNumber === "" ||
      address === "" ||
      zipCode === "" ||
      city === "" ||
      country === "" ||
      cardNumber === "" ||
      expiryDate === "" ||
      cvc === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Please enter a valid card number.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert("Please enter a valid expiry date (MM/ÅÅ).");
      return;
    }

    if (!/^\d{3}$/.test(cvc)) {
      alert("Please enter a valid CVC.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
  });
});
