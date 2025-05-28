import {useMediaQuery, useTheme} from "@mui/material";
import {useCallback, useEffect} from "react";
import {debounce, showVisibleImages} from "shared/utils";

export const useImageList = ({imageContainerID, cacheID}: {imageContainerID: string, cacheID: string}) => {
    const theme = useTheme();
    const isLessThenMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLessThenSM = useMediaQuery(theme.breakpoints.down('sm'));

    const debouncedShowVisibleImages = useCallback(debounce(() => showVisibleImages(imageContainerID, cacheID), 300), [])

    useEffect(() => {
        debouncedShowVisibleImages();

        window.addEventListener('scroll', debouncedShowVisibleImages)

        return () => window.removeEventListener('scroll', debouncedShowVisibleImages)
    }, []);

    return {
        cols: isLessThenSM ? 2 : isLessThenMD ? 3 : 4,
    }
}