import {
    prepareTodoByFilters,
    useTodoContext,
    useTodoDispatch,
    getTodos
} from "entities/todo";
import React, {useCallback, useEffect, useMemo} from "react";

export const useTodoList = () => {
    const contextState = useTodoContext();
    const dispatch = useTodoDispatch();

    useEffect(() => {
        if (!contextState?.isLoaded && dispatch) {
            getTodos(dispatch)
        }
    }, [contextState?.isLoaded]);

    const filteredTodos = useMemo(() => {
        return prepareTodoByFilters({
            todos: contextState?.todos,
            filterByDone: contextState?.filterByDone,
            sortByDate: contextState?.sortByDate,
        })
    }, [contextState?.todos, contextState?.filterByDone, contextState?.sortByDate]);

    const filtersList = useMemo(() => {
        const filtersList: string[] = [];

        if (contextState?.sortByDate) {
            filtersList.push('sortByDate')
        }

        if (contextState?.filterByDone) {
            filtersList.push('filterByDone')
        }


        return filtersList;
    }, [contextState?.sortByDate, contextState?.filterByDone])

    const handleChangeFilters = useCallback((_: React.MouseEvent<HTMLElement, MouseEvent>, filters: string[]) => {
        if (dispatch) {
            dispatch({
                type: "CHANGE_FILTERS",
                filters,
            })
        }
    }, [])

    const handleDelete = useCallback((id: string) => {
        if (dispatch) {
            dispatch({
                type: 'DELETE',
                id,
            })
        }
    }, [])

    const handleChangeCheckbox = useCallback((id: string) => {
        if (dispatch) {
            dispatch({
                type: 'CHANGE_STATUS',
                id,
            })
        }
    }, [])

    return {
        isLoading: contextState?.isLoading,
        filteredTodos,
        filtersList,
        handleDelete,
        handleChangeCheckbox,
        handleChangeFilters,
    }
}