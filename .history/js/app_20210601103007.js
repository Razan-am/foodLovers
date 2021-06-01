'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('myTable');
let tBody = do
let orders = document.getElementById('orders');

let mainArr = [];
function Food(userName,foodType){
    this.userName=userName;
    this.foodType=foodType;
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

function render(){

}