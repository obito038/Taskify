import React from 'react';
import TaskList from '<source />/components/TaskList';
import TaskForm from '<source />/components/TaskForm';

const TaskPage = () => {
  return (
    <div>
      <h1>Task Page</h1>
      {/* Additional content or navigation links */}
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
