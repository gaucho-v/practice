import React from "react";
import {usePlayingCards} from "../model/usePlayingCards";
import {Box} from "@mui/material";
import {BlockWithTitle, Button, CardList} from "shared/ui";

export const PlayingCards = React.memo(() => {
    const { list, onRemoveCache, isError } = usePlayingCards();

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
                    <CardList list={list}/> :
                    <BlockWithTitle title={isError ? 'Ошибка при загрузке колоды' : 'Список пуст'}/>
            }
        </>
    )
})

PlayingCards.displayName = 'PlayingCards';