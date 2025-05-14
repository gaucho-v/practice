import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import React from "react";
import { useTodoFilter } from "../model/useTodoFilter";

export const TodoFilters = () => {
    const { togglesList, handleChange } = useTodoFilter()

    return (
        <ToggleButtonGroup
            color="primary"
            value={togglesList}
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="sortByDate">Сортировка по дате создания</ToggleButton>
            <ToggleButton value="filterByDone">Фильтрация по выполненным задачам</ToggleButton>
        </ToggleButtonGroup>
    );
}