let taskSaver = new Array();

let task_value = document.getElementById('task');
let submitoption = document.getElementById('submmission');
let task = document.getElementById('list_of_operation');

submitoption.addEventListener('click', (event) => {
    if (task_value.value != '') {
        taskSaver.push(task_value.value);
        task.innerHTML += '<li id = "' + (taskSaver.length - 1) + '"> <button onclick="overTask(' + (taskSaver.length - 1) + ')">' + task_value.value + '</button></li>'
        task_value.value = '';
    }

    else {
        alert("invalid task (or) Empty task")
    }
});

let taskCompletion = document.getElementById('Completed_Task');
function overTask(id) {
    taskCompletion.innerHTML += '<li>' + taskSaver[id] + '</li>'

}