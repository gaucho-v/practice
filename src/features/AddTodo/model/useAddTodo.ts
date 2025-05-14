import {useCallback, useState} from "react";
import {useTodoDispatch} from "../../../entities";

export const useAddTodo = () => {
    const dispatch = useTodoDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = useCallback(() => {
        const val = title.trim()

        if (dispatch && val) {
            dispatch({
                type: "ADD",
                title: val.trim(),
            })
        }
        setTitle('');
    }, [dispatch, title]);

    return {
        handleSubmit,
        title,
        setTitle,
    }
}