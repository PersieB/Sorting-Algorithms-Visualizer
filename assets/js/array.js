// array of random numbers between 0 and 100
function makeBars(){
    const array = Array(10).fill().map(() => Math.floor(100 * Math.random()));
    //console.log(array);
    
    for(let i=0; i < array.length; i++){
        const boxWrapper = document.getElementById("box-wrapper");

        const box = document.createElement("div");
        box.innerHTML = '<b>'+ array[i]+ '<b>';
        box.style.backgroundColor = "orange";
        box.style.height = array[i]*5 + "px";
        box.classList.add("box");
        
        boxWrapper.appendChild(box);
        
    }
}




