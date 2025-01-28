import React from "react";
import "./App.css";
import Column from "./Column";
import Navbar from "./Navbar";

const KanbanBoard: React.FC = () => {
  // Datos de ejemplo para las tareas
  const tasksTodo = [
    { id: 1, title: "Tarea 1", description: "Descripción de la tarea 1" },
    { id: 2, title: "Tarea 2", description: "Descripción de la tarea 2" },
    { id: 7, title: "Tarea 7", description: "Descripción de la tarea 7" },
  ];

  const tasksInProgress = [
    { id: 3, title: "Tarea 3", description: "Descripción de la tarea 3" },
    { id: 5, title: "Tarea 5", description: "Descripción de la tarea 5" },
    { id: 8, title: "Tarea 8", description: "Descripción de la tarea 8" },
  ];

  const tasksDone = [
    { id: 4, title: "Tarea 4", description: "Descripción de la tarea 4" },
    { id: 6, title: "Tarea 6", description: "Descripción de la tarea 6" },
    { id: 9, title: "Tarea 9", description: "Descripción de la tarea 9" },
  ];

  return (
    <React.Fragment>
      <Navbar />
      <div className="kanban-board">
        <Column title="Pendiente" tasks={tasksTodo} />
        <Column title="En Proceso" tasks={tasksInProgress} />
        <Column title="Completado" tasks={tasksDone} />
      </div>
    </React.Fragment>
  );
};

export default KanbanBoard;
