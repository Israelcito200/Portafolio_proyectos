import React from 'react';
import './App.css';
import Column from './components/Column';


const App: React.FC = () => {
  // Datos de ejemplo para las tareas
  const tasksTodo = [
    { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1' },
    { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2' },
  ];

  const tasksInProgress = [
    { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3' },
  ];

  const tasksDone = [
    { id: 4, title: 'Tarea 4', description: 'Descripción de la tarea 4' },
  ];

  return (
    <div className="app-container">
      
      <div className="kanban-board">
        <Column title="Pendiente" tasks={tasksTodo} />
        <Column title="En Proceso" tasks={tasksInProgress} />
        <Column title="Completado" tasks={tasksDone} />
      </div>
    </div>
  );
};

export default App;

