import { Flexbox, IconButton, Loader } from '@/atoms/styled'
import { CSSProperties} from 'react'
import { BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'
import { CardWrap } from './styled'
import { useAppStore } from '@/atoms/store'


type CardProps = {
    flip?: boolean;
    onFlip?: () => void;
    isLoading?: boolean;
    className?: string,
    word?: string
    translate?: string
    style?: CSSProperties
    type: 'play' | 'empty'
}

export const Card = ({word, translate, type = 'play', flip, onFlip, isLoading, ...props} : CardProps) => {
  const {addToFav, deleteFromFav} = useAppStore();

  const isFav = Boolean(localStorage.getItem('favs')) && JSON.parse(localStorage.getItem('favs')!)?.includes(word!)
  const selectFav = () => {
      if(isFav) {
        deleteFromFav(word!)
        return;
      }
      addToFav(word!);
  } 
  if(type === 'empty'){
    return <CardWrap className={`card__favButton${isFav ? ' isFav' : ''}`} {...props}/>
  }  
  return (
    <CardWrap {...props}>
        {!isLoading && <>
          <IconButton onClick={selectFav} data-testid="fav" className={`card__favButton${isFav ? ' isFav' : ''}`} color='grey'><BsStarFill/></IconButton>
          <Flexbox className='card__header'><span>Английский</span> <BsArrowRight/><span>Русский</span></Flexbox>
          <h1 data-testid="word">{!flip ? word : translate}</h1>
          <button className='card__prompt' onClick={onFlip}>Нажмите чтобы показать ответ</button>
        </>}
        {isLoading && <Loader className='loader'/>}
    </CardWrap>
  )
}


