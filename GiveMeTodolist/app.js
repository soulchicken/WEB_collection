const startBtn = document.getElementById('start-btn');
const backToMain = document.getElementById('back-main-page');
const trueFalseCount = document.getElementById('true-false-count');
const todoContainer = document.getElementById('todo-container');

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
    trueFalseCount.innerHTML = `<h4 style='font-size: 0.5rem;'>From JSON PLACEHOLDER Todo Server</h4><br> 전체 TASK : ${t+f}개 <br> 해결 : ${t}개 <br> 미해결 : ${f}개`;
}

function makeTodos() {
    let str;
    for (let data of dataSet) {
        str = `${data.id} : ${data.title}`;
        if (data.completed) {
            todoContainer.innerHTML += `<div id='completed' style='font-size: 0.3rem'>${str}</div>`;
        } else {
            todoContainer.innerHTML += `<div id='notSolved' style='font-size: 0.3rem'>${str}</div>`;
        }
    }
}

startBtn.addEventListener('click', getStart);