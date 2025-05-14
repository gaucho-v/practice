import { Box } from '@mui/material';
export const EmptyList = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '1px solid gray', borderRadius: '4px' }}>
            Список пуст
        </Box>
    )
}