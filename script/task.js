const buttons = document.getElementsByClassName('btn-complete')
for (button of buttons) {
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
        if (newTask === 0) {
            alert(" Congrats, You've Done All the tasks!!")
        }

        let activity = document.getElementById('activity')
        let time = new Date()
        let timeFormat = time.toLocaleTimeString()
        let history = document.createElement('p')
        activity.appendChild(history)
        
        let card = event.target.closest('.card')
        let cardHeading = card.querySelector('.card-heading').innerText
        history.innerText = `${cardHeading} is clicked by time ${timeFormat}`
        
    })
}


document.getElementById('clear-history').addEventListener('click', function(){
     document.getElementById('activity').innerText = ''

})

