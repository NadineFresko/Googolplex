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
  if (
    (dragged.classList.contains("recyclable") &&
      event.currentTarget.classList.contains("recycleB")) ||
    (dragged.classList.contains("general") &&
      event.currentTarget.classList.contains("generalB"))
  ) {
    event.currentTarget.classList.add("bin-hover");
    event.currentTarget.classList.add("open");
    // event.currentTarget.classList.removes("close");
  } else {
    alert(
      (URL =
        "https://starecat.com/content/wp-content/uploads/can-i-have-a-plastic-bag-please-its-already-inside-buying-fish.jpg")
    );
  }
}

function dragOver(event) {
  event.preventDefault();
}
function dragLeave(event) {
  event.target.classList.remove("bin-hover");
  event.target.classList.remove("open");
  //   event.target.classList.add("close");
}
function onDrop(event) {
  console.log("ondrop called!");
  event.preventDefault();
  event.currentTarget.classList.remove("bin-hover");
  event.currentTarget.classList.remove("open");
  console.log(event.target);
  recycling(event);
  //   event.target.classList.add("close");
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
    // const data = event.dataTransfer.getData('text');
    // } else {
    //     alert(":)...Try again")
  }
  event.dataTransfer.clearData; //*************** */
}

/*=============================================
                    MOVE AWAY
==============================================*/

// function wrongEnter (event){
//     if (!
//         (dragged.classList.contains("recyclable") &&
//           event.currentTarget.classList.contains("recycleB")) ||
//         (dragged.classList.contains("general") &&
//           event.currentTarget.classList.contains("generalB"))
//       ) {
//         event.currentTarget.classList.add();

// }
