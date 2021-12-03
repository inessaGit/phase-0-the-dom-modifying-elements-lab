let container=document.createElement("div");
document.body.append(container);
container.innerHTML="Inner html this text will visible";

let section =document.createElement("section");
document.body.append(section);
section.textContent="text content visible for section ";

const ul=document.createElement("ul");
for (let i=0;i<4;i++){
const li=document.createElement("li");
li.textContent="text content visible for li "+i;
ul.append(li);
}
section.append(ul);

let main = document.createElement("div");
document.body.append(main);
main.setAttribute("id", "main")
main =document.getElementById("main");
main.innerHTML ="<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

  const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";

let ulRemoveElement= document.getElementsByTagName("ul")[0];
const secondChild = ulRemoveElement.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);


let ul2=document.createElement("ul");
document.body.append(ul2);
ul2.textContent="ul2 text conent";

//ul2.remove() 