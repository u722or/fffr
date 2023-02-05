const ed="12 March 2023 11:00 PM"
document.getElementById("dat").innerHTML=ed;
const inputs=document.querySelectorAll("input");

function clock(){
 const e=new Date(ed);
 const now=new Date();
 const diff=(e-now)/1000;
 inputs[0].value=Math.floor(diff/3600/24);
 inputs[1].value=Math.floor(diff/3600)%24;
 inputs[2].value=Math.floor(diff/60)%60;
 inputs[3].value=Math.floor(diff)%60;
}
clock();
setInterval(
    ()=>{
        clock();
    },
    1000
)
