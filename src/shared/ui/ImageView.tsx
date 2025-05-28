interface IProps {
    height?: number,
    width?: number,
    loading?: 'lazy' | 'eager',
    dataSrc?: string,

    src: string,
    alt: string,
}

export const ImageView = ({ src, alt, width, loading = 'lazy', height, dataSrc }: IProps) => {
    return (
        <img
            width={width}
            height={height}
            src={src}
            data-src={dataSrc}
            alt={alt}
            loading={loading}
        />
    )
}