document.querySelector(".container").addEventListener("click",(event)=>{
    alert("container is clicked");
    event.stopPropagation();
});

document.querySelector(".box").addEventListener("click",(event)=>{
    event.stopPropagation();
    alert("box is clicked");
});

document.querySelector(".class1").addEventListener("click",(event)=>{
    alert("class1 is clicked");
    event.stopPropagation();
});
function changeColor(){     
    let val1 = Math.ceil(0+Math.random() * 255);
    let val2 = Math.ceil(0+Math.random() * 255);
    let val3 = Math.ceil(0+Math.random() * 255);
    document.querySelector(".box").style.backgroundColor = `rgb(${val1},${val1},${val1})`;
    document.querySelector(".class1").style.backgroundColor = `rgb(${val2},${val2},${val2})`;
    document.querySelector(".container").style.backgroundColor = `rgb(${val3},${val3},${val3})`;
}
setInterval(() => {
    changeColor();
}, 3000);