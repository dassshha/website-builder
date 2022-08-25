import {useState} from 'react';

export const useVisibility = (initialState = false) => {
    const [visibility, setVisibility] = useState(false);

    const changeVisibility = () => setVisibility(!visibility);

    return {
        value: visibility,
        change: changeVisibility
    };
}
