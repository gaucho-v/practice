import {ITodo, ITodoResponse} from "../model/types";

const TODO_COUNT = 5;
export const preparedTodoResponse = (data: ITodoResponse[]): ITodo[] => {
    return data.slice(0, TODO_COUNT).map(({ id, title, completed }) => {
        return {
            id,
            title,
            completed,
            date: new Date(new Date().getTime() + Number((Math.random() * 100).toFixed())),
        }
    })
}


export const prepareTodoByFilters = ({ todos, filterByDone, sortByDate }: Partial<{ todos: ITodo[], filterByDone: boolean, sortByDate: boolean }>) => {
    if (!todos?.length) {
        return [];
    }

    if (filterByDone) {
        todos = todos.filter(item => item.completed);
    }

    if (sortByDate) {
        todos.sort((a,b) => {
            return a.date.getTime() - b.date.getTime();
        })
    } else {
        todos.sort((a,b) => {
            return b.date.getTime() - a.date.getTime();
        })
    }



    return todos;
}