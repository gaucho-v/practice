type HTMLImageElementWithDataset = HTMLImageElement & { dataset: { src: string } };

const isVisible = (elem: HTMLElement) => {
    let coords = elem.getBoundingClientRect();

    // Проверяем, что элемент находится в пределах видимой области
    return (
        coords.top >= 0 &&
        coords.left >= 0 &&
        coords.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        coords.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const setCacheImage = async (cache: Cache, img: HTMLImageElementWithDataset) => {
    const cacheResponse = await cache.match(img.dataset.src);

    if (cacheResponse) {
        img.src = URL.createObjectURL(await cacheResponse.blob());
        img.dataset.src = '';
        return Promise.resolve('success');
    }

    return Promise.reject('Картинки в кеше нет');
}

const fetchImage = async (cache: Cache, img: HTMLImageElementWithDataset) => {
    const response = await fetch(img.dataset.src);
    await cache.put(img.dataset.src, response.clone())
    img.src = URL.createObjectURL(await response.blob());
    img.dataset.src = '';
}

export const showVisibleImages = async (containerID: string, cacheID: string, imageSet: Set<string>) => {
    const container = document.getElementById(containerID)
    const images= container?.querySelectorAll('img');

    if (images) {
        const cache = await caches.open(cacheID);

        for (let img of images) {
            // Условие для скипа тех изображений, которые сменили рубашку
            if (!img.dataset.src) continue;

            if (imageSet.has(img.dataset.src)) continue;

            // Проверяем есть ли картинка в кэше и достаем ее;
            try {
                await setCacheImage(cache, img as HTMLImageElementWithDataset);
            } catch (error) {
                if (error === 'Картинки в кеше нет' && isVisible(img)) {
                    imageSet.add(img.dataset.src);
                    await fetchImage(cache, img as HTMLImageElementWithDataset)
                }
            }
        }
    }
}