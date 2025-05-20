import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ITodo} from "../model/types";
import {Button, Checkbox} from "shared/ui";

interface IProps {
    todo: ITodo;
    viewOnly?: boolean;
    onChangeCheckbox?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export const TodoCard = React.memo(({ todo, viewOnly, onDelete, onChangeCheckbox }: IProps) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="body2">
                    Дата: {todo.date.toISOString()}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {todo.title}
                </Typography>
            </CardContent>
            {
                !viewOnly && onChangeCheckbox || onDelete ?
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                        onDelete &&
                        <Button size="small" title={"Удалить"} variant={"text"} type={"button"} onClick={() => onDelete(todo.id)}/>
                    }
                    {
                        onChangeCheckbox &&
                        <Checkbox checked={todo.completed} onClick={() => onChangeCheckbox(todo.id)}/>
                    }
                </CardActions> : null
            }
        </Card>
    )
})

TodoCard.displayName = 'TodoCard';