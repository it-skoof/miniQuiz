import { words } from '@/atoms/data'
import { useAppStore } from '@/atoms/store'
import { Deck } from '@/organisms/Deck'
import { FavList } from '@/organisms/FavList'
import { PageTemplate } from '@/templates/PageTemplate'
import { useEffect } from 'react'

export const PlayPage = () => {
  
  const {wordLib, changeLib, loadLib, loadFavFromStorage, favWords, deleteFromFav} = useAppStore();
  useEffect(() => {

    loadLib(words.slice(0,3))

  }, [])

  useEffect(() => {
    if(localStorage.getItem('favs')){
     loadFavFromStorage();
     
    }
  }, [])

  return (
    <PageTemplate>
        <FavList/>
        <Deck lib={wordLib} onChangeLib={changeLib}/>
        
    </PageTemplate>
  )
}
