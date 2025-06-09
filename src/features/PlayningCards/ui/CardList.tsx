import { ImageList as ImageListComponent, ImageListItem } from '@mui/material';
import {ImageView} from "shared/ui/ImageView";
import {useImageList} from "../model/useImageList";

interface IProps {
    list: {
        src: string,
        alt: string,
    }[],
}
export const CardList = ({ list }: IProps) => {
    const { cols } = useImageList();

    return (
        <ImageListComponent cols={cols}>
            {list.map(({ src, alt}, idx) => (
                <ImageListItem key={src + idx}>
                    <ImageView
                        src={src}
                        alt={alt}
                        width={224}
                        height={312}
                    />
                </ImageListItem>
            ))}
        </ImageListComponent>
    )
}