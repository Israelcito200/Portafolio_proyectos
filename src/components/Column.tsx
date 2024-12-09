import React from 'react';
import { Task } from './Task.tsx'; // Importamos el componente de tarea

// Definimos los tipos para las propiedades del componente (en TypeScript)
interface ColumnProps {
  title: string;
  tasks: { id: number; title: string; description: string }[];
}

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
