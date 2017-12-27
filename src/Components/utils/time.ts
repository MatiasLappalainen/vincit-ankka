export const readFormat = (time: any) => {
    let timeRead = time.split('T') // split on the "T"
    .shift()    // get the first part
    .split('-') // split again on "-"
    .reverse()  // reverse the array
    .join('/');  // join with "/"
    return timeRead;
}

export const apiFormat = (time: any) => {

    const timeApi = time.toISOString().split('.')[0] + 'Z';
    
    return timeApi;
}