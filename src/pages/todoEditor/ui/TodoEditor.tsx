import { Layout } from "shared/ui";
import { TodoList, AddTodoForm } from "../../../features";
import * as React from "react";

export const TodoEditor = () => {
    return (
        <Layout>
           <>
               <AddTodoForm />
               <TodoList />
           </>
        </Layout>
    )
}