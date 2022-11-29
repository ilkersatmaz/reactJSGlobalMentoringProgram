import { useCallback, useState } from 'react';

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue);
    const toggle = useCallback(() => setValue((prev) => !prev), []);
    return [value, toggle] as const;
};

export default useToggle;