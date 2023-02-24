import { sith } from "../data/sith";



export const getSithById = (id) => {
    return sith.find(aSith => aSith.id === id);
}