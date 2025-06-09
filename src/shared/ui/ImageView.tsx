interface IProps {
    height?: number,
    width?: number,
    dataSrc?: string,

    src: string,
    alt: string,
}

export const ImageView = ({ src, alt, width, height, dataSrc }: IProps) => {
    return (
        <img
            width={width}
            height={height}
            src={src}
            data-src={dataSrc}
            alt={alt}
            loading={'lazy'}
        />
    )
}