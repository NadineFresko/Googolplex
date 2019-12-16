let recyclable = document.querySelectorAll(".recyclable");
let general = document.querySelectorAll(".general");

const recycleBin = document.querySelector(".recycleB");
const generalBin = document.querySelector(".generalB");
let bins = document.querySelectorAll(".bin");
let dragged;

function recycleStart(event) {
  dragged = event.target;
  event.target.classList.add("grabbing");
}
function dragEnter(event) {
  if (
    (dragged.classList.contains("recyclable") &&
      event.currentTarget.classList.contains("recycleB")) ||
    (dragged.classList.contains("general") &&
      event.currentTarget.classList.contains("generalB"))
  ) {
    event.currentTarget.classList.add("bin-hover");
    event.currentTarget.classList.add("open");
  } else {
    // wrong();
    check();
  }
}

function dragOver(event) {
  event.preventDefault();
  event.stopPropagation();
}
function dragLeave(event) {
  event.target.classList.remove("bin-hover");
  event.target.classList.remove("open");
}
function onDrop(event) {
  console.log("ondrop called!");
  event.preventDefault();
  event.currentTarget.classList.remove("bin-hover");
  event.currentTarget.classList.remove("open");
  console.log(event.target);
  recycling(event);
}
function initialiseBin() {
  [recycleBin, generalBin].forEach(bin => {
    bin.addEventListener("dragenter", dragEnter);
    bin.addEventListener("dragover", dragOver);
    bin.addEventListener("dragleave", dragLeave);
    bin.addEventListener("drop", onDrop);
  });
}
initialiseBin();

function recycling(event) {
  event.preventDefault();
  if (
    dragged.classList.contains("recyclable") &&
    event.target.classList.contains("recycleB")
  ) {
    dragged.remove();
    initialiseBin();
  } else if (
    dragged.classList.contains("general") &&
    event.target.classList.contains("generalB")
  ) {
    dragged.remove();
    initialiseBin();
  }
  event.dataTransfer.clearData; //*************** */
}

/*=============================================
                  MODAL 
==============================================*/

function check() {
  document.getElementById("modal-1").checked = true;
}

function wrong() {
  for (var i = 0; i < disaster.length; i++) {
    Math.random * 0.5;
  }
}

/*=============================================
               MOBILE FRIENDLY 
==============================================*/

window.onload = function() {
  // find the element that you want to drag.
  var box = document.getElementById("maindboard");

  /* listen to the touchMove event,
  every time it fires, grab the location
  of touch and assign it to box */

  box.addEventListener("touchmove", function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];

    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + "px";
    box.style.top = touchLocation.pageY + "px";
  });

  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */

  box.addEventListener("touchend", function(e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  });
};
