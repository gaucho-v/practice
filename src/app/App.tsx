import React from 'react';

import { Routes, Route } from "react-router";
import { TodoView, Home, TodoEditor, Gallery } from "pages/index";
import { TodoProvider } from "entities/todo";
import { ROUTES } from 'shared/routes';

function App() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {

            await navigator
                .serviceWorker
                .register('/sw.js')
        });
    }

  return (
      <>
          <TodoProvider>
              <Routes>
                  <Route path={ROUTES.HOME_ROUTE} element={<Home/>}/>
                  <Route path={ROUTES.GALLERY_ROUTE} element={<Gallery/>}/>
                  <Route path={ROUTES.TODO_EDITOR_ROUTE} element={<TodoEditor/>}/>
                  <Route path={ROUTES.TODO_VIEW_ROUTE} element={<TodoView/>}/>
              </Routes>
          </TodoProvider>
      </>
  );
}

export default App;
