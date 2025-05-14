import {Checkbox as CheckboxComponent} from '@mui/material'

interface ICheckbox {
    checked: boolean;
    onClick: () => void;
}
export const Checkbox = ({ checked, onClick }: ICheckbox) => {
    return (
        <CheckboxComponent checked={checked} onClick={onClick}/>
    )
}