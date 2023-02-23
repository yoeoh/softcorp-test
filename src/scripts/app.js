document.addEventListener("DOMContentLoaded", () => {
  NiceSelect.bind(document.getElementById("order-select-dropdown"));

  new SimpleBar(document.querySelector(".nice-select .list"), {
    autoHide: false,
  });
});
