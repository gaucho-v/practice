import { ToggleButton, ToggleButtonGroup} from '@mui/material';
import React from "react";

interface IProps {
    filtersList: string[],
    onChange: (event: React.MouseEvent<HTMLElement, MouseEvent>, filters: string[]) => void,
}
export const TodoFilters = React.memo(({ filtersList, onChange }: IProps) => {
    return (
        <ToggleButtonGroup
            color="primary"
            value={filtersList}
            onChange={onChange}
            aria-label="Platform"
        >
            <ToggleButton value="sortByDate">Сортировка по дате создания</ToggleButton>
            <ToggleButton value="filterByDone">Фильтрация по выполненным задачам</ToggleButton>
        </ToggleButtonGroup>
    );
})