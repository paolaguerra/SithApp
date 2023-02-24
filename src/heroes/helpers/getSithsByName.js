import {sith} from '../data/sith';

export const getSithsByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return sith.filter(
        oneSith => oneSith.sith.toLocaleLowerCase().includes(name)
    );
}
