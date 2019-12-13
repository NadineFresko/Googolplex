const recyclable = document.querySelectorAll(".recyclable")
const general = document.querySelectorAll(".general")
const bins = document.querySelectorAll(".bin");


bins.forEach(elem =>{
    elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
    elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
    elem.addEventListener("drop", onDrop); // Fires when an item is dropped on a valid drop target
});


function dragStart(event){
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log("drag is moving!")
};
function dragEnter(event){
    if(event.target.classList.contains("close")){
        event.target.classList.remove("close");
    }
    event.target.classList.add("open");
    event.target.classList.add("bin-hover");
    
};
function dragOver(event){
    event.preventDefault();
}
function dragLeave(event){
    // if(!event.target.classList.contains("open")) {
        //   }
    event.target.classList.remove("bin-hover");
    event.target.classList.remove("open");
    event.target.classList.add("close");
};


function onDrop(event){
    console.log("Something has dropped!!!");
    event.preventDefault();
    event.target.classList.remove("open");
    event.target.classList.add("close");
    console.log(document.getElementById("recycle").classList); 
    const data = event.dataTransfer.getData('text');
    const bin = event.target;

    // bin.appendChild(draggableElement);
    
    // event.dataTransfer.clearData;
    event.target.appendChild(document.getElementById(data));
    // event.target.classList.add("lidClose");
};