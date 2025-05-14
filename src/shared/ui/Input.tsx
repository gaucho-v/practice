import TextField from '@mui/material/TextField';

interface IInput {
    id?: string,
    variant?: 'outlined',
    label?: string,
    value: string,
    onChange: (val: string) => void,
}
export const Input = ({ value, onChange, id = 'outlined-basic', label = 'Outlined', variant = 'outlined'}: IInput) => {
    return (
        <TextField id={id} label={label} variant={variant} value={value} onChange={(e) => onChange(e.target.value)}/>
    )
}