// Write your code here!
let main = document.getElementById("main");
document.body.onload=main.remove();

let newHeader=document.createElement("h1");
newHeader.setAttribute("id","victory");


let personName=`Inessa`;
//newHeader.textContent=`${personName} is the champion`;
newHeader.innerHTML=`${personName} is the champion`;

console.log(newHeader.innerHTML);
console.log(newHeader.innerText);

console.log(newHeader.textContent);