class User {
    constructor(firstName, lastName, id, birthDate, Departing, Arrivaling, dateLeaving, dateReturning, Meal, Extras, bags) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.birthDate = birthDate;
        this.departing = Departing;
        this.arriving = Arrivaling;
        this.leaveDate = dateLeaving;
        this.returnDate = dateReturning;
        this.Meal = Meal;
        this.Extras = Extras;
        this.bags = bags;
    }
}

let userList = []
let userId = 1

function check(name) {
    let output = [];
    let elems = document.getElementsByName(name);
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            output.push(elems[i].value)
        }
    }
    return output
}

function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthDate = document.getElementById("DoB").value;
    let Departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let dateLeaving = document.getElementById("leaveDate").value;
    let dateReturning = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let Meal = check("meal");
    let Extras = check("extra");
    if (firstName != "" && lastName != "" && birthDate != "" && Departing != "" && arriving != "" && dateLeaving != "" && dateReturning != "") {
        let user = new User(firstName, lastName, userId, birthDate, Departing, arriving, dateLeaving, dateReturning, Meal, Extras, bags);
        userId++;
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("DoB").value = "";
        document.getElementById("departing").value = "";
        document.getElementById("arriving").value = "";
        document.getElementById("leaveDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = 0;
        document.getElementById("chick").checked = true
        document.getElementById("fish").checked = false
        document.getElementById("legroom").checked = false
        document.getElementById("headphones").checked = false
        document.getElementById("window").checked = false
        document.getElementById("moreFood").checked = false
    }
    console.log(userList)
}

function print() {
    printSpace = document.getElementById("names");

    printSpace.innerHTML = "";
    for (let i = 0; i < userList.length; i++) {
        printSpace.innerHTML += `<div> ${userList[i].id} ${userList[i].firstName} ${userList[i].lastName}</div>`
    }
}

function search() {
    let name = document.getElementById("search").value
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].firstName == name) {
            document.getElementById("outfirstName").value = userList[i].firstName;
            document.getElementById("outlastName").value = userList[i].lastName;
            document.getElementById("outDoB").value = userList[i].DoB;
            document.getElementById("outdeparting").value = userList[i].departing;
            document.getElementById("outarriving").value = userList[i].arriving;
            document.getElementById("outleaveDate").value = userList[i].leaveDate;
            document.getElementById("outreturnDate").value = userList[i].returnDate;
            document.getElementById("outmeal").value = userList[i].Meal.join(", ")
            document.getElementById("outextras").value = userList[i].Extras.join(", ")
            document.getElementById("outbags").value = userList[i].bags;
        }
    }
}
