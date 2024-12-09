import React from 'react';

// Definimos los tipos para las propiedades del componente (en TypeScript)
interface TaskProps {
  task: { id: number; title: string; description: string };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export { Task };
