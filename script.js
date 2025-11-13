const button = document.getElementById("removeBtn");
const select = document.getElementById("colorSelect");

button.addEventListener("click", function handleRemove() {
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});
