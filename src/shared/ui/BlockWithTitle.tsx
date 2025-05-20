import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";

type Props = {
    title: string,
}
export const BlockWithTitle = ({ title }: { title: string }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '1px solid gray', borderRadius: '4px' }}>
            <Typography variant="h4" component="h4">
                {title}
            </Typography>
        </Box>
    )
}