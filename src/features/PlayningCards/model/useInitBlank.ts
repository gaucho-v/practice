import { CARD_BLANK_URL } from "entities/deck";
import {useEffect, useState} from "react";
export const useInitBlank = ({ cacheID }: { cacheID: string }) => {
    const [imageBlank, setImageBlank] = useState('');

    useEffect(() => {
        async function saveBlank() {
            const cache = await caches.open(cacheID);
            const cacheResponse = await cache.match(CARD_BLANK_URL);

            if (cacheResponse) {
                setImageBlank(URL.createObjectURL(await cacheResponse.blob()))
            } else {
                const response = await fetch(CARD_BLANK_URL);
                await cache.put(CARD_BLANK_URL, response.clone())
                const blob = await response.blob();
                setImageBlank(URL.createObjectURL(blob))
            }
        }

        saveBlank();
    }, []);


    return {
        imageBlank,
    }
}