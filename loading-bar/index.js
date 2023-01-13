const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
let buttonEl = document.querySelector("button");

let idx = 0;
buttonEl.disabled = true;
updateNum()

function updateNum(){
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%";
    idx++;
    if(idx < 101){
        setTimeout(updateNum, 20)
    }else{
        buttonEl.disabled = false;
    }
}


buttonEl.addEventListener('click', ()=>{
    idx = 0;
    buttonEl.disabled = true;
    updateNum();
})