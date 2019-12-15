let recyclable = document.querySelectorAll(".recyclable");
let general = document.querySelectorAll(".general");

const recycleBin = document.querySelector(".recycleB");
const generalBin = document.querySelector(".generalB");
let bins = document.querySelectorAll(".bin");
let dragged;

function recycleStart(event) {
  dragged = event.target;
}
function dragEnter(event) {
  event.preventDefault;
  event.stopPropagation();
  if (
    (dragged.classList.contains("recyclable") &&
      event.currentTarget.classList.contains("recycleB")) ||
    (dragged.classList.contains("general") &&
      event.currentTarget.classList.contains("generalB"))
  ) {
    event.currentTarget.classList.add("bin-hover");
    event.currentTarget.classList.add("open");
  } else {
    // event.stopPropagation();
    console.log("printingggggggggggggggggggggggggggg and stilllllllllllll");
  }
}

function dragOver(event) {
  event.preventDefault();
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
  [recycleBin, generalBin].forEach(lid => {
    lid.addEventListener("dragenter", dragEnter);
    lid.addEventListener("dragover", dragOver);
    lid.addEventListener("dragleave", dragLeave);
    lid.addEventListener("drop", onDrop);
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
                  MOVE AWAY
==============================================*/
