type Fn = () => void;

export const debounce = (fn: Fn, timeout: number): Fn => {
    let ID: NodeJS.Timeout

    return (...args) => {
        clearTimeout(ID)

        ID = setTimeout(() => {
             fn.apply(this, args)
        }, timeout)
    };
}