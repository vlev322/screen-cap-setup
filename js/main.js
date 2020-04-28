// Custom dropdown
for (const dropdown of document.querySelectorAll(".custom-dropdown")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".dropdown-content").classList.toggle("custom-dropdow-open");
    this.querySelector(".arrow").classList.toggle("arrow-open");
  });
}

// Control menu flow
const getSiblings = (sibling) =>
  Array.prototype.filter.call(sibling.parentNode.children, function (child) {
    return child !== sibling;
  });

function* menuItemsGenerator(items) {
  for (let i in items) {
    yield items[i++];
    yield i;
  }
}

const scrollController = (elem, toggleHide) => {
  if (!elem) {
    return;
  }
  elem.addEventListener("scroll", function () {
    if (elem.scrollHeight - elem.clientHeight === elem.scrollTop) {
      toggleHide.classList.add("open");
    }
  });
};

const confPanel = document.getElementById("confirming-panel");
const menuItems = [].slice.call(document.getElementsByClassName("flow-item"));
const menuItemsIterable = menuItemsGenerator(menuItems);
const btnNext = document.getElementById("btn-next");
let flowContent = document.getElementsByClassName("flow-item-content")[0];
let collectBtn = document.getElementsByClassName("content-btn-collect")[0];

if (collectBtn) {
  collectBtn.addEventListener("click", () => {
    btnNext.disabled = false;
  });
}

scrollController(flowContent, confPanel);
if (btnNext) {
  btnNext.addEventListener("click", () => {
    //hide confirming panel
    confPanel.classList.remove("open");

    const currentItem = menuItemsIterable.next().value;
    const currentPos = menuItemsIterable.next();
    const confPanelElems = getSiblings(btnNext);

    if (currentPos.value === 4) {
      btnNext.disabled = true;
    }

    confPanelElems[0].innerHTML = "save & exit wizard";
    if (!(currentPos.value < menuItems.length)) {
      return;
    }
    menuItems[currentPos.value].classList.add("flow-item-active");
    currentItem.classList.remove("flow-item-active");
    currentItem.classList.add("flow-item-done");

    let flowContent = document.getElementsByClassName("flow-item-content")[currentPos.value];
    scrollController(flowContent, confPanel);
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

//Toggle password view

for (const passControl of document.getElementsByClassName("pass-control")) {
  passControl.addEventListener("click", function () {
    const input = getSiblings(passControl)[0];
    const getAttr = input.getAttribute("type");
    if (getAttr === "password") {
      input.setAttribute("type", "text");
      passControl.classList.toggle("view");
    } else {
      input.setAttribute("type", "password");
      passControl.classList.toggle("view");
    }
  });
}

// Togle placeholder on inputs
for (const inputComposition of document.getElementsByClassName("input-composition")) {
  const input = inputComposition.querySelectorAll("input")[0];
  const placeholder = getSiblings(input)[0];
  input.addEventListener("change", function () {
    if (input.value.trim().length) {
      placeholder.classList.add("visible-plhdr");
    } else {
      placeholder.classList.remove("visible-plhdr");
    }
  });
}
