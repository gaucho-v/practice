import { ITodoResponse } from './types';

export const fetchTodos = async (): Promise<ITodoResponse[]> => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json());
}