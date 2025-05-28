export const isRequestError = (data: unknown): data is Error => {
    return data instanceof Error;
}