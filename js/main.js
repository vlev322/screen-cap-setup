// Custom dropdown
for (const dropdown of document.querySelectorAll(".custom-dropdown")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".dropdown-content").classList.toggle("custom-dropdow-open");
    this.querySelector(".arrow").classList.toggle("arrow-open");
  });
}

// Control menu flow
function* menuItemsGenerator(items) {
  for (let i in items) {
    yield items[i++];
    yield i;
  }
}

const menuItems = [].slice.call(document.getElementsByClassName("flow-item"));
const menuItemsIterable = menuItemsGenerator(menuItems);
const btnNext = document.getElementById("btn-next");
if (btnNext) {
  btnNext.addEventListener("click", () => {
    const currentItem = menuItemsIterable.next().value;
    const currentPos = menuItemsIterable.next();

    if (!(currentPos.value < menuItems.length)) {
      return;
    }
    menuItems[currentPos.value].classList.add("flow-item-active");
    currentItem.classList.remove("flow-item-active");
    currentItem.classList.add("flow-item-done");
  });
}

//Toggle help modal

const mainContainer = document.getElementById("main-container");
const modalHelp = document.getElementById("help-modal");

for (const closeBtn of document.getElementsByClassName("toggle-modal")) {
  closeBtn.addEventListener("click", function () {
    mainContainer.classList.toggle("blur");
    modalHelp.classList.toggle("modal-open");
  });
}
