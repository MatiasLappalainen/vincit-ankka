interface SortAscTypes {
    dateTime: Date;
}

export const sortAsc = (date1: SortAscTypes, date2: SortAscTypes) => {

    const date1Fin = new Date(date1.dateTime);
    const date2Fin = new Date(date2.dateTime);

    if (date1Fin > date2Fin) { return 1; }
    if (date2Fin > date1Fin) { return -1; }
    return 0;
};
export const sortDesc = (date1: SortAscTypes, date2: SortAscTypes) => {
    
        const date1Fin = new Date(date1.dateTime);
        const date2Fin = new Date(date2.dateTime);
    
        if (date1Fin > date2Fin) { return -1; }
        if (date2Fin > date1Fin) { return 1; }
        return 0;
    };
    