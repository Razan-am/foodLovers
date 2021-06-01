'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('myTable');
let orders = document.getElementById('orders');

let mainArr = [];

function Food(userName,foodType){
    this.userName=userName;
    this.foodType=foodType;
    mainArr.push(this)
}