
import {create} from 'zustand'
import { AppStore } from './types'
export const useAppStore = create<AppStore>((set) => ({
    wordLib: [],
    favWords: [],
    loadFavFromStorage: () => set((state) => {
        
        if(localStorage.getItem('favs')){
            const favs = JSON.parse(localStorage.getItem('favs') as string) as string[];
            return {
                ...state,
                favWords: [...favs]
            }
            
        }
        return {
            ...state,
            favWords: [...state.favWords]
        }
    
    }),
    addToFav: (word) => set((state) => {
        const newState = [...state.favWords, word];
        if(localStorage.getItem('favs')){
            const favs = JSON.parse(localStorage.getItem('favs') as string) as string[];
            if(!favs.includes(word)) localStorage.setItem('favs', JSON.stringify([...favs, word]));
            
        }
        else{
            localStorage.setItem('favs', JSON.stringify(newState));
        }
        if(!state.favWords.includes(word)){
            console.log('add')
            return ({
                ...state,
                favWords: newState
            })

        }
        return state;

    }),
    deleteFromFav: (word) => set((state) => {
        const newState = [...state.favWords.filter(favWord => favWord !== word)]
        if(localStorage.getItem('favs')){
            const favs = JSON.parse(localStorage.getItem('favs') as string) as string[];
            if(favs.includes(word)) {
                
                localStorage.setItem('favs', JSON.stringify(favs.filter(favWord => favWord !== word)));
            }
        }
        return {
            ...state,
            favWords: newState
        }


    }),
    loadLib: (words) => set((state) => ({
        ...state,
        wordLib: [...state.wordLib, ...words]
    })),
    changeLib: (words) => set((state) => ({
        ...state,
        wordLib: [...words]
    })),
    removeLib: () => set((state) => ({
        ...state,
        wordLib: []
    }))

}))