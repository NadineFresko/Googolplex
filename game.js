let recyclable = document.querySelectorAll(".recyclable")
let general = document.querySelectorAll(".general")

const recycleBin = document.querySelectorAll(".recycleB");
const generalBin = document.querySelector(".generalB");
let bins = document.querySelectorAll(".bin")
let dragged;
let binned;

// $(".recyclable").onDrop((".recycleB"), document.classList.add(".open"))

// recycleBin.forEach(elem =>{
//     elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
//     elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
//     elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
//     elem.addEventListener("drop", recycling); // Fires when an item is dropped on a valid drop target
// });

// generalBin.forEach(elem =>{
//     elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
//     elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
//     elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
//     elem.addEventListener("drop", recycling); // Fires when an item is dropped on a valid drop target
// });



function recycleStart(event){
    dragged = event.target;
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
    event.target.classList.remove("bin-hover");
    event.target.classList.remove("open");
    event.target.classList.add("close");
};
// document.addEventListener("dragenter", function(evnet){
// })


function recycling(event){
    event.preventDefault();
    if(dragged.classList.contains("recyclable") && event.target.classList.contains("recycleB")){
        // even
        dragged.remove();
    }
    else if(dragged.classList.contains("general") && event.target.classList.contains("generalB")){
        dragged.remove();
    }
        
        event.target.classList.remove("open");
        event.target.classList.add("close");
        const data = event.dataTransfer.getData('text');
        
        
        event.dataTransfer.clearData;  //*************** */
    }
        // dataTransfer.getData <= what data? can i get 
        // use attribute
   
    // event.target.appendChild(document.getElementById(data));


function binning(event){
    event.preventDefault();
    if(binned.classList.contains("general")){
        binned.remove()
        event.target.classList.remove("open");
        event.target.classList.add("close");
        const data = event.dataTransfer.getData('text');
        
        
        event.dataTransfer.clearData;  //*************** */
    }
        // dataTransfer.getData <= what data? can i get 
        // use attribute
   
    // event.target.appendChild(document.getElementById(data));
    
};





// function recycling(event){
//     if (bins.classList.contains("recyclable"){
//         recyclable.onDrop();
//     })


// }

//=========================

//   if the waste classList contains recyclable 
// &&  if the bins classList contains recyclable the allow hover
//    else close, hover = None, mouse pointer = none

//==========================

//  
