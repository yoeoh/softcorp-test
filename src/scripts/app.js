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
    // rootMargin: "",
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

  // burger menu with copy of main menu
  const burgerButton = document.getElementById("burger-menu-button");
  const burgerMenu = document.getElementById("burger-menu");
  const burgerCloseButton = document.getElementById("burger-menu-close-button");
  const headerMenu = document.getElementById("header-menu");
  const body = document.querySelector("body");

  function openBurgerMenu() {
    burgerMenu.classList.add("burger_visible");
    copyMenu();

    body.classList.add("fullscreen");
  }

  function closeBurgerMenu() {
    burgerMenu.classList.remove("burger_visible");
    body.classList.remove("fullscreen");
  }

  let isCopied = false;

  function copyMenu() {
    if (isCopied) return;

    isCopied = true;

    const menuItemsArray = Array.from(
      headerMenu.cloneNode(true).getElementsByTagName("li")
    );

    const list = document.getElementById("burger-menu-list");

    menuItemsArray.forEach((item) => {
      list.appendChild(item);
    });

    burgerMenu.addEventListener("click", () => closeBurgerMenu());
  }

  burgerButton.addEventListener("click", () => openBurgerMenu());
  burgerCloseButton.addEventListener("click", () => closeBurgerMenu());
});
