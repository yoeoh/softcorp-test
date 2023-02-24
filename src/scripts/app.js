document.addEventListener("DOMContentLoaded", () => {
  NiceSelect.bind(document.getElementById("order-select-dropdown"));

  new SimpleBar(document.querySelector(".nice-select .list"), {
    autoHide: false,
  });

  const rangeInput = document.getElementById("form-range-input");
  const rangeValue = document.getElementById("form-range-value");

  rangeInput.addEventListener("input", (e) => {
    const value = e.target.value;
    rangeValue.innerText = `${value}%`;
  });
});
