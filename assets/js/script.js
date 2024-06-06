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
});
