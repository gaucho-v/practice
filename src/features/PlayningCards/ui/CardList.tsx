import { ImageList as ImageListComponent, ImageListItem } from '@mui/material';
import {ImageView} from "shared/ui/ImageView";
import {useImageList} from "../model/useImageList";

interface IProps {
    list: {
        src: string,
        alt: string,
    }[],
    imageBlank: string,
    cacheID: string,
    imageContainerID: string,
}
export const CardList = ({ list, imageBlank, cacheID, imageContainerID }: IProps) => {
    const { cols } = useImageList({ imageContainerID, cacheID });

    return (
        <ImageListComponent cols={cols} id={imageContainerID}>
            {list.map(({ src, alt}, idx) => (
                <ImageListItem key={src + idx}>
                    <ImageView
                        src={imageBlank}
                        dataSrc={src}
                        alt={alt}
                        width={224}
                        height={312}
                    />
                </ImageListItem>
            ))}
        </ImageListComponent>
    )
}