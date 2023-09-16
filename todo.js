const taskInput = document.getElementById('taskInput');
        const pendingTasksList = document.getElementById('pendingTasks');
        const completedTasksList = document.getElementById('completedTasks');

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                return;
            }

            const taskElement = document.createElement('li');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <span>${taskText}</span>
                <button onclick="markCompleted(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;

            pendingTasksList.appendChild(taskElement);
            taskInput.value = '';
        }

        function markCompleted(button) {
            const task = button.parentNode;
            task.classList.add('completed');
            button.textContent = 'Undo';
            button.onclick = function () { undoCompleted(this); };
            completedTasksList.appendChild(task);
        }

        function undoCompleted(button) {
            const task = button.parentNode;
            task.classList.remove('completed');
            button.textContent = 'Complete';
            button.onclick = function () { markCompleted(this); };
            pendingTasksList.appendChild(task);
        }

        function deleteTask(button) {
            const task = button.parentNode;
            task.remove();
        }