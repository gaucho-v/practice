import { useEffect, useState } from "react";
import { getDeckOfCards } from "entities/deck";
import { DECK_CACHE_ID } from "./config"
import { isRequestError } from "shared/utils";

export const usePlayingCards = () => {
    const [isError, setIsError] = useState(false)
    const [list, setList] = useState<{ src: string, alt: string}[]>();

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
    }
}