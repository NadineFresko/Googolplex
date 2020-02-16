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
      MODAL 
==============================================*/

var disasters = new Array(
  "https://generalrecyclingadviceandawareness.files.wordpress.com/2018/05/5e94faab-4b8a-4e87-a4ed-8cf62494c377.jpeg?w=1100",
  "https://steemitimages.com/640x0/https://i.imgur.com/8hHWgQX.jpg",
  "https://recyclinginternational.com/wp-content/uploads/2018/10/Landfill-stats.jpeg",
  "https://recyclinginternational.com/wp-content/uploads/2018/10/Landfill-stats.jpeg",
  "https://reverenddaviddunbar.files.wordpress.com/2014/01/plastic-albatros.jpg"
);

function randomImg() {
  for (i = 0; i < disasters.length; i++) {
    document
      .querySelector(".disaster")
      .setAttribute("src =" + randomImg[i] + '"');
  }
}
