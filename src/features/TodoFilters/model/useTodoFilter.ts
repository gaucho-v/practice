import {useTodoContext, useTodoDispatch} from "../../../entities";
import React from "react";

export const useTodoFilter = () => {
    const contextState = useTodoContext();
    const dispatch = useTodoDispatch();
    const togglesList: string[] = [];

    if (contextState?.sortByDate) {
        togglesList.push('sortByDate')
    }

    if (contextState?.filterByDone) {
        togglesList.push('filterByDone')
    }

    const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, filters: string[]) => {
        if (dispatch) {
            dispatch({
                type: "CHANGE_FILTERS",
                filters,
            })
        }
    }

    return {
        togglesList,
        handleChange,
    }
}
