// array of random numbers between 0 and 100
const array = Array(10).fill().map(() => Math.floor(100 * Math.random()));
console.log(array);

// creating bars from the random numbers generated
for(let i=0; i < array.length; i++){
    const bar = document.createElement("div").className = "barCharts";
    let div_height = i*5 + "px";
    bar.style.height = div_height;
}