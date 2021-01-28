class User{
    constructor(firstName, lastName, id, birthDate, Departing, Arrivaling, dateLeaving, dateReturning, Meal, Extras){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.birthDate = birthDate;
        this.Departing = Departing;
        this.Arrivaling = Arrivaling;
        this.dateLeaving = dateLeaving;
        this.dateReturning = dateReturning;
        this.Meal = Meal;
        this.Extras = Extras;
    }
}

let userList = []
let userId = 1

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthDate = document.getElementById("birthDate").value;
    let Departing = document.getElementById("Departing").value;
    let Arrivaling = document.getElementById("Arrivaling").value;
    let dateLeaving = document.getElementById("dateLeaving").value;
    let dateReturning = document.getElementById("dateReturning").value;
    let Meal = document.getElementById("Meal").value;
    let Extras = document.getElementById("Extras").value; 
    if(firstName != "" && lastName != "" && birthDate != "" && Departing != "" && Arrivaling != "" && dateLeaving != "" && dateReturning != "" && Meal != "" && Extras != ""){
        let User = new User(firstName, lastName, id, birthDate, Departing, Arrivaling, dateLeaving, dateReturning, Meal, Extras);
        userId = Id++;
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lirstName").value = "";
        document.getElementById("birthDate").value = "";
        document.getElementById("Departing").value = "";
        document.getElementById("Arrivaling").value = "";
        document.getElementById("dateLeaving").value = "";
        document.getElementById("dateReturning").value = "";
        document.getElementById("Meal").value = "";
        document.getElementById("Extras").value = "";
     }
}

function print(){
    printSpace = document.getElementById("printSpace");

    printSpace.innerHTML = "";
    for(let i = 0; i < userList.length; i++){
        printSpace.innerHTML += `<div> ${userList[i].id} ${userList[i].firstName}${userList[i].lastName} ${userList[i].birthDate} ${userList[i].Departing} ${userList[i].id}${userList[i].Arrivaling} ${userList[i].dateLeaving}${userList[i].dateReturning} ${userList[i].Meal} ${userList[i].Extras} </div>`
    }
}