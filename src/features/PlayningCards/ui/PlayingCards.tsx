import React from "react";
import {usePlayingCards} from "../model/usePlayingCards";
import {Box} from "@mui/material";
import {BlockWithTitle, Button, ImageList} from "shared/ui";

export const PlayingCards = React.memo(() => {
    const { list, onRemoveCache, imageBlank, cacheID, imageContainerID, isError } = usePlayingCards();

    return (
        <>
            <Box>
                <Button
                    onClick={onRemoveCache}
                    variant={"outlined"}
                    title={'Очистить кэш c картами'}
                />
            </Box>
            {
                list?.length ?
                    <ImageList
                        list={list}
                        imageBlank={imageBlank}
                        cacheID={cacheID}
                        imageContainerID={imageContainerID}
                    /> :
                    <BlockWithTitle title={isError ? 'Ошибка при загрузке колоды' : 'Список пуст'}/>
            }
        </>
    )
})

PlayingCards.displayName = 'PlayingCards';