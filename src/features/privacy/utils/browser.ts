export const isBrowser = () => 
  typeof window !== "undefined" &&
  typeof window.localStorage !== "undefined" &&
  typeof window.document !== "undefined";

export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (!isBrowser()) return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },

  setItem: (key: string, value: string): boolean => {
    if (!isBrowser()) return false;
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error("Error writing to localStorage:", error);
      return false;
    }
  }
};
