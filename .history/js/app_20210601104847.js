'use strict';

let myForm = document.getElementById('myForm');
let myTable = document.getElementById('myTable');


let mainArr = [];
function Foods(userName,foodType){
    this.userName=userName;
    this.foodType=foodType;
    this.img=`images/${foodType}.jpg`
    mainArr.push(this);
}
console.log(mainArr);

myForm.addEventListener('submit',handleEvent);
function handleEvent(event){
    event.preventDefault();

    let userName = event.target.name.value;
    let foodType = event.target.food.value;
    console.log(foodType);
    new Foods(userName,foodType);
    render()
}

function randomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function render(){
    let tBody = document.createElement('tr');
    myTable.appendChild(tBody);
    
    for (let index = 0; index < mainArr.length; index++) {
        tBody.textContent='';

        let td1 = document.createElement('td');
        tBody.appendChild(td1);

        let imgEl = document.createElement('img');
        td1.appendChild(imgEl);
        imgEl.setAttribute('src', mainArr[index].img);

        let td2 = document.createElement('td');
        tBody.appendChild(td2);

        let pEl1 = document.createElement('p');
        td2.appendChild(pEl1);
        pEl1.textContent=`Customer Name:${mainArr[index].userName}`;
        let pEl2 = document.createElement('p');
        td2.appendChild(pEl2);
        pEl2.textContent=`Food Type:${mainArr[index].foodType}`;
        let pEl3 = document.createElement('p');
        td2.appendChild(pEl3);
        pEl3.textContent=`Food Price:${randomNumber(1,100)}`;
        
        
    }
}

function setting(){
    let data = JSON.stringify(mainArr);
    localStorage.setItem('information')
}