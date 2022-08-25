import {useState} from 'react';

export const useVisibility = (initialState = false) => {
    const [value, setValue] = useState(false);

    const change = () => setValue(!value);

    return {
        value,
        change
    };
}
