const startBtn = document.getElementById('start-btn');
const backToMain = document.getElementById('back-main-page');
const trueFalseCount = document.getElementById('true-false-count');
const todoContainer = document.getElementById('todo-container');

const clearBtn = document.getElementById('clear-btn');
const viewAllBtn = document.getElementById('view-all');

const xhr = new XMLHttpRequest();
let dataSet = [];
let t = 0;
let f = 0;

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const responseData = xhr.responseText; // string
        dataSet = JSON.parse(responseData);
    }
    countTF();
    makeTodos();
}

function getStart() {
    startBtn.classList.add('hidden');
    backToMain.classList.add('hidden');
    xhr.open('GET', "https://jsonplaceholder.typicode.com/todos");
    xhr.send();
}


function countTF() {
    for (let data of dataSet) {
        if (data.completed) {
            t++;
        } else {
            f++;
        }
    }
    trueFalseCount.innerHTML = `<h4 style='font-size: 0.5rem;'>From JSON PLACEHOLDER Todo Server</h4><br>
    TASK : ${t+f}개 <br> 
    COMPLETED : ${t}개 <br> NOT COMPLETED : ${f}개`;
}

function makeTodos() {
    let str;
    for (let data of dataSet) {
        str = `${data.id} : ${data.title}`;
        if (data.completed) {
            todoContainer.innerHTML += `<div class='completed' style='font-size: 0.3rem'>${str}</div>`;
        } else {
            todoContainer.innerHTML += `<div class='notSolved' style='font-size: 0.3rem'>${str}</div>`;
        }
    }
}

function clearTodo() {
    const completedTodo = document.getElementsByClassName('completed');
    for (let el of completedTodo) {
        el.classList.add('hidden');
    }
}

function viewAllTodo() {
    const completedTodo = document.getElementsByClassName('completed');
    for (let el of completedTodo) {
        el.classList.remove('hidden');
    }
}


startBtn.addEventListener('click', getStart);
clearBtn.addEventListener('click',clearTodo);
viewAllBtn.addEventListener('click', viewAllTodo);