import React from "react";
import HomePage from "./HomePage";
import KanbanBoard from "./KanbanBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kanban" element={<KanbanBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
