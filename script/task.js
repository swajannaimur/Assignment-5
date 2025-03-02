const buttons = document.getElementsByClassName('btn-complete')
console.log(buttons)
for (button of buttons) {
    console.log(button)
    button.addEventListener('click', function (event) {
        let assignedTasks = document.getElementById('assigned-tasks').innerText
        let convertedTasks = parseInt(assignedTasks)
        let newTask = assignedTasks - 1
        document.getElementById('assigned-tasks').innerText = newTask
        let doneTasks = document.getElementById('done-tasks').innerText
        let convertedDoneTasks = parseInt(doneTasks)
        let newDoneTask = convertedDoneTasks + 1;
        document.getElementById('done-tasks').innerText = newDoneTask
        event.target.disabled = true;
        event.target.style.color = "white";
        event.target.style.backgroundColor = "#ced6ff"
        alert('Board Updated Successfully')
        if(newTask === 0 ){
            alert(" Congrats, You've Done All the tasks!!")
        }
        let activity = document.getElementById('activity')
        let time = new Date ()
        let history = document.createElement('p')
        history.innerText = `this is clicked by time ${time}`
        activity.appendChild(history)
        

    })
}