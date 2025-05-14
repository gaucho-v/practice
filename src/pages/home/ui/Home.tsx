import { Layout } from "../../../shared";
import { TodoList, TodoFilters, AddTodoForm } from "../../../features";
import * as React from "react";

export const Home = () => {
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