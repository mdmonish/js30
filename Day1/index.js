console.log("Js index")
window.addEventListener("keydown",function(e){
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    key.classList.add("clicked")

    //using setTimeout to remove class
    // this.setTimeout(function(){
    //     key.classList.remove("clicked")
    // },700)

});

//using eventListener to remove class
function removeTransition(e){
    if(propertyName !== 'transform')return;
    this.classList.remove('clicked')
}
const keys = document.querySelectorAll(".key");
keys.forEach(key=> key.addEventListener('transitionend',removeTransition))