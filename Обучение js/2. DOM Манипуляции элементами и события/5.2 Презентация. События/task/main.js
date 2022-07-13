//6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

let items = document.querySelectorAll(".dropdown-item");

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    let menu = this.querySelector(".dropdown-menu");
    if (menu.classList.contains("d-none")) {
      menu.classList.remove("d-none");
    } else {
      menu.classList.add("d-none");
    }
    items.forEach((item) => {
      let menu2 = item.querySelector(".dropdown-menu");
      if (menu !== menu2) {
        menu2.classList.add("d-none");
      }
    });
  });
});
