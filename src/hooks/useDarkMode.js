import useLocalStorage from './useLocalStorage';

const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', value);
    return [darkMode, setDarkMode];
}

export default useDarkMode;