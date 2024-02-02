const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL

const TaskService = {
  getTasks: async () => {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    const data = await response.json();
    return data;
  },

  createTask: async task => {
    await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  },
};

export default TaskService;
