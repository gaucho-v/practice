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

export const showVisibleImages = async (containerID: string, cacheID: string) => {
    const container = document.getElementById(containerID)
    const images = container?.querySelectorAll('img');

    if (images) {
        const cache = await caches.open(cacheID);

        for (let img of images) {
            if (!img.dataset.src) continue;

            if (isVisible(img)) {
                const cacheResponse = await cache.match(img.dataset.src);

                if (cacheResponse) {
                    img.src = URL.createObjectURL(await cacheResponse.blob());
                    img.dataset.src = '';
                    continue;
                }

                const response = await fetch(img.dataset.src);
                // может быть проблема с тем, что мы не знаем какой ответ кешируем
                await cache.put(img.dataset.src, response.clone())
                img.src = URL.createObjectURL(await response.blob());
                img.dataset.src = '';
            }
        }
    }
}