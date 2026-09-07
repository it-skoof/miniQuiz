import { useAppStore } from '@/atoms/store'
import { Flexbox, IconButton } from '@/atoms/styled'
import { DropDown } from '@/molecules/DropDown'
import { useEffect, useState } from 'react'
import { BsFillStarFill, BsFillTrashFill, BsXLg } from 'react-icons/bs'
import { FavWrapper } from './styled'

export const FavList = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleHandle = () => {setOpen(!isOpen)}
  const {favWords, deleteFromFav} = useAppStore();
  

  useEffect(() => {
    if(!favWords.length) setOpen(false);
  }, [favWords.length])

  if(!favWords.length){

    return null;
  }

  return (
    <FavWrapper>
        <DropDown data-testid="fav" isOpen={isOpen} openHandler={toggleHandle} classNameContent='favList__content' className='favList' $icon={isOpen ? <BsXLg/> : <BsFillStarFill color='#e2b12b'/>} $type={'circle'}>
                {favWords.map(word => <Flexbox key={word} className='favList__content_item'>
                <h3>{word}</h3>      
                <IconButton onClick={() => {deleteFromFav(word)}} color='#d42c2c' $pd='0'><BsFillTrashFill/></IconButton>
            </Flexbox>)}
        </DropDown>

    </FavWrapper>
    
  )
}
