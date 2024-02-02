import React, { useState } from 'react';
import TaskService from '../services/api';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async event => {
    event.preventDefault();

    // Create a new task using the form data
    const newTask = {
      title,
      description,
    };

    // Send a request to the backend to create the task
    await TaskService.createTask(newTask);

    // Clear the form after submission
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Input fields for task details */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
