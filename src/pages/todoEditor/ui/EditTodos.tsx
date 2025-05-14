import { Layout } from "shared/ui";
import { TodoList, TodoFilters, AddTodoForm } from "../../../features";
import * as React from "react";

export const TodoEditor = () => {
    return (
        <Layout>
           <>
               <AddTodoForm />
               <TodoFilters />
               <TodoList />
           </>
        </Layout>
    )
}