const button = document.getElementById("");



let darkMode = false;

button.onclick = function () {

  if (darkMode === false) {
    document.body.style.background = "black";
    darkMode = true;
  } else {
    document.body.style.background = "white";
    darkMode = false;
  }

};
