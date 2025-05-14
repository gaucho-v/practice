import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ITodo} from "../model/types";

interface IProps {
    todo: ITodo;
    buttons?: React.ReactNode;
}

export const TodoCard = ({ todo, buttons }: IProps) => {
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
                buttons &&
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {buttons}
                </CardActions>
            }
        </Card>
    )
}