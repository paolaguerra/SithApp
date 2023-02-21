import { sith } from '../data/sith';


export const getSithByRange = (range) => {
  
    const validRange = ['Apprentice', 'Master'];
    if ( !validRange.includes(range)) {
        throw new Error(`${range} is not a valid range`);
    }

    return sith.filter(sith => sith.range === range);
}
