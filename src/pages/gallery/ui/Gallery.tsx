import { ImageList, Layout } from "shared/ui";
import Typography from "@mui/material/Typography";
import * as React from "react";

const listCount = Array.from(Array(12)).map((item, idx) => idx + 1)

const getIconList = () => {
    return listCount.map((item) => ({
        src: `https://placeholder.pics/svg/300/DEDEDE/555555/${item}`,
        alt: item.toString(),
    }))
}

const iconList = getIconList();
export const Gallery = () => {


    return (
        <Layout>
            <>
                <Typography variant="h5" component="h5">
                    Галерея
                </Typography>
                <ImageList list={iconList}/>
            </>
        </Layout>
    )
}