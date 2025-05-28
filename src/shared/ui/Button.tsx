import { Button as ButtonComponent } from '@mui/material';

interface IButton {
    variant: 'outlined' | 'text',
    title: string,
    type?: 'button' | 'submit',
    size?: 'small',
    onClick: () => void,
}

export const Button = ({ variant = "outlined", title, type = 'button', onClick, size }: IButton) => {
    return (
        <ButtonComponent
            size={size}
            variant={variant}
            type={type}
            onClick={onClick}
        >
            {title}
        </ButtonComponent>
    )
}