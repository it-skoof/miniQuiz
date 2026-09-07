export interface ButtonProps {
    $variant: 'rounded' | 'outlined' | 'filled', 
    $bg?: string
    $pd?: string
}

export type TWordLibArray = {word: string, translate: string}[]


interface StoreState {
    wordLib: TWordLibArray,
    favWords: string[],
}

interface StoreActions {
    loadFavFromStorage: () => void;
    addToFav: (word: string) => void;
    deleteFromFav: (word: string) => void;
    loadLib: (words: TWordLibArray) => void;
    changeLib: (words: TWordLibArray) => void;
    removeLib: () => void;
}

export type AppStore = StoreState & StoreActions