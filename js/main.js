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
