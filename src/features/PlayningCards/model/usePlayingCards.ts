import { useEffect, useState } from "react";
import { getDeckOfCards } from "entities/deck";
import { DECK_CACHE_ID, DECK_CONTAINER_ID } from "./config"
import {isRequestError} from "shared/utils";
import {useInitBlank} from "../model/useInitBlank";

export const usePlayingCards = () => {
    const [isError, setIsError] = useState(false)
    const [list, setList] = useState<{ src: string, alt: string}[]>();
    const { imageBlank} = useInitBlank({ cacheID: DECK_CACHE_ID });

    useEffect(() => {
        async function getCards() {
            const data = await getDeckOfCards()
            if (isRequestError(data)) {
                setIsError(true);
            } else {
                setList(data?.map((item) => {
                    return {
                        src: item.images.svg,
                        alt: '',
                    }
                }))
            }
        }

        getCards();
    }, []);

    const onRemoveCache = async ()=> await caches.delete(DECK_CACHE_ID);

    return {
        isError,
        list,
        onRemoveCache,
        imageBlank,
        imageContainerID: DECK_CONTAINER_ID,
        cacheID: DECK_CACHE_ID,
    }
}