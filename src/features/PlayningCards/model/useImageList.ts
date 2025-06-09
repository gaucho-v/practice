import {useMediaQuery, useTheme} from "@mui/material";

export const useImageList = () => {
    const theme = useTheme();
    const isLessThenMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLessThenSM = useMediaQuery(theme.breakpoints.down('sm'));

    return {
        cols: isLessThenSM ? 2 : isLessThenMD ? 3 : 4,
    }
}