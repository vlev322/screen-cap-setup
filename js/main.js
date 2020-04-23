// Custom dropdown

for (const dropdown of document.querySelectorAll(".custom-dropdown")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".dropdown-content").classList.toggle("custom-dropdow-open");
  });
}

// window.addEventListener("click", function (e) {
//   for (const select of document.querySelectorAll(".custom-select")) {
//     if (!select.contains(e.target)) {
//       select.classList.remove("open");
//     }
//   }
// });

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
  const currentPos = menuItemsIterable.next().value;

  menuItems[currentPos].classList.add("flow-item-active");
  currentItem.classList.remove("flow-item-active");
  currentItem.classList.add("flow-item-done");
});
