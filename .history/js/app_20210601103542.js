'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('myTable');


let mainArr = [];
function Food(userName,foodType){
    this.userName=userName;
    this.foodType=foodType;
    this.img=`images/${food}.jpg`
    mainArr.push(this);
}
console.log(mainArr);

myForm.addEventListener('submit',handleEvent);
function handleEvent(event){
    event.preventDefault();

    let userName = event.target.name.value;
    let foodType = event.target.food.value;

    new Food(userName,foodType);

}

function randomNumber(){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let tBody = document.createElement('tr');
myTable.appendChild(tBody);
function render(){
    tBody.textContent='';

    for (let index = 0; index < mainArr.length; index++) {
        let td1 = document.createElement('td');
        tBody.appendChild(td1);

        let imgEl = document.createElement('img');
        td1.appendChild('imgEl');
        imgEl.setAttribute('src', mainArr[index].img);

        let td2 = document.createElement('td');
        tBody
    }
}