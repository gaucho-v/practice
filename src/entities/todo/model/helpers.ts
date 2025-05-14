import {ITodo, ITodoResponse, TodoContextState} from "../model/types";

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


export const prepareTodoByFilters = (data: TodoContextState) => {
    let res = data.todos;

    if (data.filterByDone) {
        res = res.filter(item => item.completed);
    }

    if (data.sortByDate) {
        res.sort((a,b) => {
            return a.date.getTime() - b.date.getTime();
        })
    } else {
        res.sort((a,b) => {
            return b.date.getTime() - a.date.getTime();
        })
    }



    return res;
}