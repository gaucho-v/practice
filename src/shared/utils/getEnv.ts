const mode =  process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const getEnv = () => {
    return {
        mode,
        ghPath: '/practice',
        isDev: mode === 'development',
    }
}