function exercice1()
{
    let box1 = document.getElementById("box1");
    let btnChangeColor = document.getElementById("btn-change-color");
    
    btnChangeColor.addEventListener("click", function(event){
        console.log('je clique');
        box1.style.backgroundColor = "blue";
    });
}

function exercice2()
{
    let box2 = document.getElementById("box2");
    let btnMove = document.getElementById("btn-move");
    
    btnMove.addEventListener("click", function(event){
       box2.classList.toggle('move');
    });
}

function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let ul = document.querySelector("#ex3>ul");
    let btnAddIngredients = document.getElementById("btn-add-ingredients");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let txt = document.createTextNode("Salade");
    let txt1 = document.createTextNode("Tomate");
    let txt2 = document.createTextNode("Oignon");
    
    btnAddIngredients.addEventListener("click", function(event){
      ul.appendChild(li);
      ul.appendChild(li1);
      ul.appendChild(li2);
      li.appendChild(txt);
      li1.appendChild(txt1);
      li2.appendChild(txt2);
    });
    
}

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
}

function exercice5()
{

}

function exercice6()
{

}

window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
});

