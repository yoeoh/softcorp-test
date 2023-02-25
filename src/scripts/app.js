document.addEventListener("DOMContentLoaded", () => {
  // select
  NiceSelect.bind(document.getElementById("order-select-dropdown"));

  // scrollbar for select
  new SimpleBar(document.querySelector(".nice-select .list"), {
    autoHide: false,
  });

  // range
  const rangeInput = document.getElementById("form-range-input");
  const rangeValue = document.getElementById("form-range-value");

  rangeInput.addEventListener("input", (e) => {
    const value = e.target.value;
    rangeValue.innerText = `${value}%`;
  });

  // sticky header with changing style
  const header = document.getElementById("header");
  const hero = document.getElementById("hero");

  const options = {
    threshold: 1,
  };

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("header__compact");
      } else {
        header.classList.remove("header__compact");
      }
    });
  }, options);

  heroObserver.observe(hero);
});
