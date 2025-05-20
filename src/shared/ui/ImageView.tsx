// import {useCallback, useEffect} from "react";

interface IProps {
    height?: number,
    width?: number,
    loading?: 'lazy' | 'eager',
    dataSrc?: string,

    src: string,
    alt: string,
}

export const ImageView = ({ src, alt, width, loading = 'lazy', height, dataSrc }: IProps) => {
    // const ref = useCallback((node) => {
    //     if (node) {
    //         node.onload = () => {
    //
    //             console.log('loaded', src)
    //         }
    //     }
    //  }, []);
    //
    //
    // useEffect(() => {
    //
    // }, []);




    return (
        <img
            ref={ref}
            width={width}
            height={height}
            src={src}
            data-src={dataSrc}
            alt={alt}
            loading={loading}
        />
    )
}