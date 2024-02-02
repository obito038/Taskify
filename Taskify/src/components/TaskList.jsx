import React, { useEffect, useState } from 'react';
import TaskService from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend when the component mounts
    const fetchTasks = async () => {
      const tasksData = await TaskService.getTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {/* Render the list of tasks */}
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
          {/* Display other task details */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
