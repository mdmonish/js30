let currentColor="";

const gridContainer = document.querySelector(".color__grid");

const randomGenerator=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);

function createGrid(row,col){
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
     const div= document.createElement("div");
      div.classList.add("box");
      div.setAttribute("data-label",`${i*col + j+1}`);
      if(i>row-2){
        div.style.background =`rgb(${randomGenerator(0,255)},${randomGenerator(0,255)},${randomGenerator(0,255)})`;
      }
      gridContainer.appendChild(div)
    }
  }
}
createGrid(8,7);

gridContainer.addEventListener("click",function(e){
  
  
  if(+(e.target.dataset.label)>49){
    currentColor = e.target.style.backgroundColor;
  }
  else if(currentColor && e.target.classList.contains("box")){
    e.target.style.background=currentColor;
  }
 
});







           

