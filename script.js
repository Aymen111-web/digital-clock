const houre  =document.getElementById("hour");
const minute=document.getElementById("minute")
const second = document.getElementById("second");
const ampm= document.getElementById("ampm"); 
function clock(){
   
let h=new Date().getHours()
let m=new Date().getMinutes()
let s= new Date().getSeconds()
let ampm ="AM";
if(h>12)
   {
     h=h-12;
ampm="PM"
   }
    if (h < 10) {
      "0" + h;
    } else {
      h;
    }
    if (m < 10) {
      "0" + m;
    } else {
      m;
    }
    if (s < 10) {
      "0" + m;
    } else {
      s;
    }
houre.innerText=h;
minute.innerText=m;
second.innerHTML=s;
ampm,(innerText=ampm);

setTimeout(() =>{
clock();
}, 1000)
}
clock();
