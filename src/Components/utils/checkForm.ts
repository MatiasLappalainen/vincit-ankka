export const checkNulls = (species: string, ammount: Number) => {
    if(species !== null && ammount !== null && species !== "Select Species"){
        return true;
    }
    return false;
}
