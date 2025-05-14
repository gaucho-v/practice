import { TodoCard } from "../../../entities";
import { Button, Checkbox, EmptyList, Loader } from "../../../shared";
import * as React from "react";
import {useTodoList} from "../model/useTodoList";

export const TodoList = ({ viewOnly }: { viewOnly?: boolean }) => {
    const { handleDelete, handleChangeCheckbox, filteredTodos, isLoading } = useTodoList();

    if (isLoading) {
        return <Loader/>
    }

    if (!filteredTodos.length) {
        return <EmptyList/>
    }

    return (
        <>
            {
                filteredTodos.map((todo) => {
                    return (
                        <TodoCard todo={todo} key={todo.id} buttons={
                            viewOnly ? undefined :
                            <>
                                <Button size="small" title={"Удалить"} variant={"text"} type={"button"} onClick={() => handleDelete(todo.id)}/>
                                <Checkbox checked={todo.completed} onClick={() => handleChangeCheckbox(todo.id)}/>
                            </>
                        }/>
                    )
                })
            }
        </>
    )
}