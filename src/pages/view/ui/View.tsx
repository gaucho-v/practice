import { Layout } from "../../../shared";
import { TodoList, TodoFilters } from "../../../features";
import * as React from "react";
export const View = () => {
    return (
        <Layout>
           <>
               <h3>Просмотр задач</h3>
               <TodoFilters/>
               <TodoList viewOnly/>
           </>
        </Layout>
    )
}