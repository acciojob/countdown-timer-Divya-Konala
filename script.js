// Your script here.
const countDownDisplay=document.querySelector("#countDown");
const endTimeDisplay=document.querySelector("#endTime");

document.querySelector("button").addEventListener("click",()=>{
    let countDownTime=document.querySelector("input").value;
    let currDate=new Date();
    let endTime=addMinutes(currDate,Number(countDownTime)).toLocaleTimeString();
    countDownDisplay.textContent=currDate.toLocaleTimeString();
    endTimeDisplay.textContent=endTime;
    let displayTime = setInterval(()=>{
        let currTime = new Date().toLocaleTimeString();
        countDownDisplay.textContent=currTime;
        if( currTime==endTime) clearInterval(displayTime);
    },1000)
})

const addMinutes=(date,mins)=>{
    date.setMinutes(date.getMinutes()+mins);
    return date;
}


