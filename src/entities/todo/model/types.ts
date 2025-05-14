export interface ITodoResponse {
    id: string;
    title: string;
    completed: boolean;
}

export interface ITodo extends ITodoResponse {
    date: Date,
}

export interface TodoContextState {
    todos: ITodo[],
    sortByDate: boolean,
    filterByDone: boolean,
    isLoading: boolean,
}

interface IAddTodo {
    type: 'ADD',
    title: string,
}

interface IDeleteTodo {
    type: 'DELETE',
    id: string,
}

interface IChangeStatusTodo {
    type: 'CHANGE_STATUS',
    id: string,
}

interface IChangeTitleTodo {
    type: 'CHANGE_TEXT',
    id: string,
    title: string,
}

interface IInitTodosContext {
    type: 'INIT',
    data: ITodo[],
}

interface IChangeFilters {
    type: 'CHANGE_FILTERS',
    filters: string[],
}

interface ISetTodos {
    type: 'SET_TODOS',
    todos: ITodo[],
}

interface IChangeIsLoading {
    type: 'CHANGE_IN_LOADING',
    isLoading: boolean,
}

export type TodoContextAction = IAddTodo | IDeleteTodo | IChangeStatusTodo | IChangeTitleTodo | IChangeFilters | IInitTodosContext | ISetTodos | IChangeIsLoading;