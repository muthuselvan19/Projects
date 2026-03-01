let taskSaver = new Array();

let task_val = document.getElementById('task');
let submitoption = document.getElementById('submmission');
let task = document.getElementById('list_of_operation');
let clearTag = document.getElementById('clearing');

submitoption.addEventListener('click', (event) => {
    if (task_val.value != '') {

        taskSaver.push(task_val.value);
        task.innerHTML += '<li id = "' + (taskSaver.length - 1) + '"> <button onclick="overTask(' + (taskSaver.length - 1) + ')">' + task_val.value + '</button></li>'
        task_val.value = '';

    }

    else {
        alert("invalid task (or) Empty task");
    }
});

let taskCompletion = document.getElementById('Completed_Task');
function overTask(id) {
    let dt = new Date().toLocaleTimeString();
    taskCompletion.innerHTML += '<li>' + taskSaver[id] + "\t On   :     " + dt + '</li>'
}

// const now = document.getElementById('')
// function overTime(id) {
//     let current = now.toLocaleTimeString();

// }
// innerHTML = '<p>'+ now +'</p>'
// console.log(now);

// let timing = document.getElementById('op');
// if(task_val.value == ''){
//     timing.innerHTML += now;
// }
// else{
//     timing.innerHTML = "Somthing went Wrong"
// }