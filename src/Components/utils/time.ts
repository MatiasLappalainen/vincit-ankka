export const readFormat = (time: Date) => {
    return new Date(time).toLocaleDateString();
};

export const readFormatTime = (time: Date) => {
    return new Date(time).toLocaleTimeString();
};

export const apiFormat = (time: Date) => {
    const timeApi = time.toISOString().split('.')[0] + 'Z';
    return timeApi;
};
