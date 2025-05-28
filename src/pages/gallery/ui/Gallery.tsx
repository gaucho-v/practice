import { Layout } from "shared/ui";
import * as React from "react";
import { Typography } from "@mui/material";
import {PlayingCards} from "features/PlayningCards";


export const Gallery = () => {
    return (
        <Layout>
            <>
                <Typography variant="h5" component="h5">
                    Галерея
                </Typography>
                <PlayingCards/>
            </>
        </Layout>
    )
}