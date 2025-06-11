import React from 'react';

import { Routes, Route } from "react-router";
import { TodoView, Home, TodoEditor, Gallery } from "pages/index";
import { TodoProvider } from "entities/todo";
import { ROUTES } from 'shared/routes';
import { getEnv } from "shared/utils";

const { ghPath, isDev} = getEnv();
const ROUTE_PATH = isDev ? '' : ghPath

function App() {

    console.log(ROUTE_PATH, ghPath, isDev)
    console.log(`${ROUTE_PATH}${ROUTES.HOME_ROUTE}`)

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {

            await navigator
                .serviceWorker
                .register(isDev ? 'sw.js' : `${ghPath}/sw.js`)
        });
    }

  return (
      <TodoProvider>
          <Routes>
              <Route path={`${ROUTE_PATH}${ROUTES.HOME_ROUTE}`} element={<Home/>}/>
              <Route path={`${ROUTE_PATH}${ROUTES.GALLERY_ROUTE}`} element={<Gallery/>}/>
              <Route path={`${ROUTE_PATH}${ROUTES.TODO_EDITOR_ROUTE}`} element={<TodoEditor/>}/>
              <Route path={`${ROUTE_PATH}${ROUTES.TODO_VIEW_ROUTE}`} element={<TodoView/>}/>
          </Routes>
      </TodoProvider>
  );
}

export default App;
