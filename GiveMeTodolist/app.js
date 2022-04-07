const startBtn = document.getElementById('start-btn');
const backToMain = document.getElementById('back-main-page');
const trueFalseCount =document.getElementById('true-false-count');

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

startBtn.addEventListener('click', getStart);