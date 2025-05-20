import { ImageList as ImageListComponent, ImageListItem, useTheme, useMediaQuery } from '@mui/material';
import {ImageView} from "shared/ui/ImageView";
import {useCallback, useEffect} from "react";
import {debounce, showVisibleImages} from "shared/utils";

interface IProps {
    list: {
        src: string,
        alt: string,
    }[],
}

const GALLERY_IMAGE_CONTAINER_ID = 'gallery-images'
export const ImageList = ({ list }: IProps) => {
    const theme = useTheme();
    const isLessThenMD = useMediaQuery(theme.breakpoints.down('md'));
    const isLessThenSM = useMediaQuery(theme.breakpoints.down('sm'));

    const debouncedShowVisibleImages = useCallback(debounce(() => showVisibleImages(GALLERY_IMAGE_CONTAINER_ID), 500), [])

    useEffect(() => {
        debouncedShowVisibleImages();

        window.addEventListener('scroll', debouncedShowVisibleImages)

        return () => window.removeEventListener('scroll', debouncedShowVisibleImages)
    }, []);

    return (
        <ImageListComponent cols={isLessThenSM ? 1 : isLessThenMD ? 2 : 3} id={GALLERY_IMAGE_CONTAINER_ID}>
            {list.map(({ src, alt}, idx) => (
                <ImageListItem key={src + idx}>
                    <ImageView
                        src={"https://placeholder.pics/svg/300/DEDEDE/555555/1"}
                        dataSrc={src}
                        alt={alt}
                    />
                </ImageListItem>
            ))}
        </ImageListComponent>
    )
}