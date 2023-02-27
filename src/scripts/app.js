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

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("header__compact");
        } else {
          header.classList.remove("header__compact");
        }
      });
    },
    {
      threshold: 1,
      // rootMargin: "",
    }
  );

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

  // fade-in animations
  const animatedItemsArray = Array.from(
    document.querySelectorAll("[data-animated]")
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.add("transparent");

        if (entry.isIntersecting) {
          const direction = entry.target.getAttribute("data-animated");

          entry.target.classList.add(`animation-fadein${direction}`);
          entry.target.classList.remove("transparent");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedItemsArray.forEach((item) => {
    observer.observe(item);
  });

  // schema
  const schemaItems = Array.from(
    document.getElementById("schema").getElementsByClassName("schema__item")
  );

  if (schemaItems.length > 5) {
    schemaItems.forEach((item, index) => {
      const itemIcon = item.querySelector(".schema__item-icon");
      if ((index + 1) % 5 === 0) {
        itemIcon.classList.add("nobefore");
      }
    });
  }
});
