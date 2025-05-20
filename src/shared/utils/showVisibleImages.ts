const isVisible = (elem: HTMLElement) => {
    let coords = elem.getBoundingClientRect();

    // Проверяем, что элемент находится в пределах видимой области
    return (
        coords.top >= 0 &&
        coords.left >= 0 &&
        coords.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        coords.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const showVisibleImages = (containerID: string) => {
    const container = document.getElementById(containerID)
    const images = container?.querySelectorAll('img');

    if (images) {
        for (let img of images) {
            if (!img.dataset.src) continue;

            if (isVisible(img)) {
                img.src = img.dataset.src;
                img.dataset.src = '';
            }
        }
    }
}