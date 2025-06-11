const mode =  process.env.NODE_ENV === 'production' ? 'production' : 'development';
const ghPath = process.env.GH_PATH;

export const getEnv = () => {
    return {
        mode,
        ghPath,
        isDev: mode === 'development',
    }
}