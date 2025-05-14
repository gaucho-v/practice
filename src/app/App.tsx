import React from 'react';

import { Routes, Route } from "react-router";
import { View, Home } from "../pages";
import { TodoProvider } from "../entities";

function App() {
  return (
      <TodoProvider>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/view'} element={<View/>}/>
          </Routes>
      </TodoProvider>
  );
}

export default App;
