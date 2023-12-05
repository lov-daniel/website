
let weight = -1;
let allergic = -1;

const lifestyles = ["Vegan", "Vegetarian", "Neither"];

const allergies = ["Seafood", "Nut", "Fruit", "Wheat",
                   "Gluten", "Soy", "Sesame", "Shellfish"];

function weightChoice(userChoice) {
    console.log(userChoice);
    switch(userChoice) {

        case 0:
            weight = 0;
            break;
        case 1:
            weight = 1;
            break;
        case 2:
            weight = 2;
            break;
    }

    let buttongroup2 = document.getElementById("buttongroup2");

    for (let index = 0; index <lifestyles.length; index++) {
        let parameter = index;
        let button = document.createElement("button");
        button.addEventListener("click", function(e) {

            switch (parameter) {

                case 0:
                    allergicTable("vegan");
            }

            allergicTable();
        });
        button.textContent = `${lifestyles[index]}`
        buttongroup2.append(button);
    }

    buttongroup2.style.visibility = "visible";

    console.log(weight);
}

function boo(index) {

    alert(index);
}

function allergicTable(userChoice) {

    switch(userChoice) {

        case 0:
            allergic = 0;
            break;
        case 1:
            allergic = 1;
            break;
        }
    if (allergic === 1) {

        let checktable = document.getElementById("allergies");

        
    }
}