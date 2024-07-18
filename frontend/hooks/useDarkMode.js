import { useLocalStorage } from "./useLocalStorage"

export function useDarkMode() {
    const [dark, setDark] = useLocalStorage('darkMode', false)
    return [dark, setDark]
}