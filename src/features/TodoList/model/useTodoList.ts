import {prepareTodoByFilters, useTodoContext, useTodoDispatch} from "../../../entities";

export const useTodoList = () => {
    const contextState = useTodoContext();
    const dispatch = useTodoDispatch();

    const filteredTodos = contextState?.todos.length ? prepareTodoByFilters(contextState) : [];

    const handleDelete = (id: string) => {
        if (dispatch) {
            dispatch({
                type: 'DELETE',
                id,
            })
        }
    }

    const handleChangeCheckbox = (id: string) => {
        if (dispatch) {
            dispatch({
                type: 'CHANGE_STATUS',
                id,
            })
        }
    }

    return {
        isLoading: contextState?.isLoading,
        filteredTodos,
        handleDelete,
        handleChangeCheckbox,
    }
}