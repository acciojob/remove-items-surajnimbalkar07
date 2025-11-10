//your JS code here. If required.
const select = document.getElementById("colorSelect");
    const button = document.getElementById("removeBtn");

    button.onclick = function() {
      select.remove(select.selectedIndex);
    }