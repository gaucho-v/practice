import React from 'react';

import { Routes, Route } from "react-router";
import { View, Home, TodoEditor } from "../pages";
import { TodoProvider } from "../entities";
import { ROUTES } from 'shared/routes';

function App() {
  return (
      <TodoProvider>
          <Routes>
              <Route path={ROUTES.HOME_ROUTE} element={<Home/>}/>
              <Route path={ROUTES.TODO_EDITOR_ROUTE} element={<TodoEditor/>}/>
              <Route path={ROUTES.VIEW_TODOS_ROUTE} element={<View/>}/>
          </Routes>
      </TodoProvider>
  );
}

export default App;
