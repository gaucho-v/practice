import React, {createContext, JSX, useContext, useEffect, useReducer} from 'react';
import {TodoContextAction, TodoContextState} from './types';
import { v4 as uuidv4 } from 'uuid';

const initialContext: TodoContextState = {
    todos: [],
    sortByDate: false,
    filterByDone: false,
    isLoading: false,
    isLoaded: false,
}

const todoReducer = (state: TodoContextState, action: TodoContextAction): TodoContextState => {
    switch (action.type) {
        case 'SET_TODOS': {
            return {
                ...state,
                todos: action.todos,
            }
        }
        case 'INIT': {
            return initialContext;
        }
        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, {
                    id: uuidv4(),
                    title: action.title,
                    completed: false,
                    date: new Date(),
                }]
            };
        }
        case 'CHANGE_TEXT': {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            title: action.title,
                        }
                    }
                    return todo;
                })
            };
        }
        case 'DELETE': {
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.id)
            };
        }
        case 'CHANGE_STATUS': {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }

                    return todo;
                })
            }
        }
        case 'CHANGE_FILTERS': {
            return {
                ...state,
                sortByDate: action.filters.includes('sortByDate'),
                filterByDone: action.filters.includes('filterByDone'),
            }
        }
        case 'CHANGE_IS_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        case 'SET_IS_LOADED': {
            return {
                ...state,
                isLoaded: action.isLoaded,
            }
        }
        default:
            return state
    }
}

const TodoContext = createContext<TodoContextState | null>(null);

const TodoDispatchContext = createContext<React.ActionDispatch<[action: TodoContextAction]> | null>(null);

export const useTodoContext = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);

export const TodoProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(
        todoReducer,
        initialContext,
    );


    return (
        <TodoContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}