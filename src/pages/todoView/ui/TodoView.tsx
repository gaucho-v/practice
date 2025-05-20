import { Layout } from "shared/ui";
import { TodoList } from "features/index";
import * as React from "react";
import Typography from "@mui/material/Typography";
export const TodoView = () => {
    return (
        <Layout>
            <>
                <Typography variant="h5" component="h5">
                    Просмотр задач
                </Typography>
                <TodoList viewOnly/>
            </>
        </Layout>
    )
}