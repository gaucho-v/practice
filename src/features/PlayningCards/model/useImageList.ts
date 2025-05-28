import {useMediaQuery, useTheme} from "@mui/material";
import {useCallback, useEffect, useRef} from "react";
import {debounce, showVisibleImages} from "shared/utils";

export const useImageList = ({imageContainerID, cacheID}: { imageContainerID: string, cacheID: string }) => {
    const imagesSet = useRef(new Set<string>());

    const theme = useTheme();
    const isLessThenMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLessThenSM = useMediaQuery(theme.breakpoints.down('sm'));

    const debouncedShowVisibleImages = useCallback(debounce(() => showVisibleImages(imageContainerID, cacheID, imagesSet.current), 300), [])

    useEffect(() => {
        debouncedShowVisibleImages();

        window.addEventListener('scroll', debouncedShowVisibleImages)

        return () => window.removeEventListener('scroll', debouncedShowVisibleImages)
    }, []);

    return {
        cols: isLessThenSM ? 2 : isLessThenMD ? 3 : 4,
    }
}