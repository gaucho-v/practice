import { TodoCard } from "entities/todo";
import { BlockWithTitle, Loader } from "shared/ui";
import * as React from "react";
import {useTodoList} from "../model/useTodoList";
import {TodoFilters} from "features/TodoList/ui/TodoFilters";

export const TodoList = React.memo(({ viewOnly }: { viewOnly?: boolean }) => {
    const {
        filteredTodos,
        filtersList,
        handleDelete,
        handleChangeCheckbox,
        handleChangeFilters,
        isLoading
    } = useTodoList();

    if (isLoading) {
        return <Loader/>
    }

    return (
        <>
            <TodoFilters filtersList={filtersList} onChange={handleChangeFilters}/>
            {
                filteredTodos.length ? filteredTodos.map((todo) => {
                    return (
                        <TodoCard
                            viewOnly={viewOnly}
                            todo={todo}
                            key={todo.id}
                            onChangeCheckbox={handleChangeCheckbox}
                            onDelete={handleDelete}
                        />
                    )
                }) : <BlockWithTitle title={'Список пуст'}/>
            }
        </>
    )
})

TodoList.displayName = 'TodoList';