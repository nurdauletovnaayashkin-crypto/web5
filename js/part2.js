document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("targetText").textContent = "The paragraph text has been updated successfully!";
});

const styleBox = document.getElementById("styleBox");

document.getElementById("changeBgBtn").addEventListener("click", () => {
  styleBox.style.backgroundColor = "#FFB3D9";
});

document.getElementById("changeFontBtn").addEventListener("click", () => {
  styleBox.style.fontSize = "1.4rem";
});

const itemList = document.getElementById("itemList");

document.getElementById("addItemBtn").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New List Item " + (itemList.children.length + 1);
  itemList.appendChild(newItem);
});

document.getElementById("removeItemBtn").addEventListener("click", () => {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});