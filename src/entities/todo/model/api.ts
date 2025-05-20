import { ITodoResponse, TodoContextAction } from './types';
import {preparedTodoResponse} from "entities/todo";
import React from 'react';

const fetchTodos = async (): Promise<ITodoResponse[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json();
}

export const getTodos = async (dispatch: React.ActionDispatch<[action: TodoContextAction]>) => {
    dispatch({
        type: 'CHANGE_IS_LOADING',
        isLoading: true,
    })

    try {
        const result = await fetchTodos();

        if (result) {
            dispatch({
                type: 'SET_TODOS',
                todos: preparedTodoResponse(result),
            })
            dispatch({
                type: 'SET_IS_LOADED',
                isLoaded: true,
            })
        }
    } catch (err) {
        console.log('Ошибка получения задач')
    } finally {
        dispatch({
            type: 'CHANGE_IS_LOADING',
            isLoading: false,
        })
    }
}