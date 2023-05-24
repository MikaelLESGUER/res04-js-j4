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
    let ul = document.querySelector("#ex3 > ul");
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
    
    let btnAddHero = document.getElementById("btn-add-hero");
    
    var currentHeroIndex = 0;

        function afficherHeroSuivant() {
            var tableBody = document.querySelector("#ex4 > table > tbody");
            if (currentHeroIndex < heroes.length) {
                var hero = heroes[currentHeroIndex];
                var row = document.createElement("tr");
                var nameCell = document.createElement("td");
                var secretCell = document.createElement("td");
                nameCell.textContent = hero.name;
                secretCell.textContent = hero.secret;
                row.appendChild(nameCell);
                row.appendChild(secretCell);
                tableBody.appendChild(row);
                currentHeroIndex++;
            }
        }
        
        btnAddHero.addEventListener("click", function(){
            afficherHeroSuivant();
        });
}

function exercice5()
{
    let boxBlue = document.getElementById("blue");
    let boxRed = document.getElementById("red");
    let boxGreen = document.getElementById("green");
    let btnTurn = document.getElementById("btn-turn");
    
    btnTurn.addEventListener("click", function(event){
        boxBlue.style.backgroundColor = "red";
        boxRed.style.backgroundColor = "green";
        boxGreen.style.backgroundColor = "blue";
    });

}

function exercice6()
{
}

window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
});

