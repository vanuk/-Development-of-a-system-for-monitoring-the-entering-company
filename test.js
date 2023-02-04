let a= document.getElementById("A");
let b= document.getElementById("B");
let c= document.getElementById("C");
let k1= document.getElementById("K1");
let k2= document.getElementById("K2");
let k3= document.getElementById("K3");
let s= document.getElementById("S");
let q= document.getElementById("Q");
function checkForm()
{
   // (((parseFloat(s.value)-2)*10)+100)

 summa =( parseInt(a.value)*parseFloat(k1.value) + parseInt(b.value)*parseFloat(k2.value) + parseInt(c.value)*parseFloat(k3.value) + (((parseFloat(s.value)-2)*10)+100)*0.1 ) 
        *1.04*1.02;

 document.getElementById("R").value=summa;
   
}

function cheakKoef(d1,d2,d3)
{
    k1.value=d1;
    k2.value=d2;
    k3.value=d3;
}