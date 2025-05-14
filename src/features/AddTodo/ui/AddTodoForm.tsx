import {Button, Input} from "shared/ui";
import * as React from "react";
import {useAddTodo} from "../model/useAddTodo";

export const AddTodoForm = () => {
    const { title, setTitle, handleSubmit } = useAddTodo();


    return (
        <>
            <Input label={'Добавить задачу'} value={title} onChange={setTitle}/>
            <Button type="button" variant="outlined" title="Добавить" size={"small"} onClick={handleSubmit}/>
        </>
    )
}