import { useEffect, useMemo, useState } from 'react'

import { Card } from '../../molecules/Card';
import { DeckMenu, DeckWrap } from './styled';
import { Button, IconButton } from '@/atoms/styled';
import { BsArrowRight, BsRepeat } from 'react-icons/bs';
import { words } from '@/atoms/data';
import { shuffle } from './lib';
import { DeckProps } from './types';

export const Deck = ({lib, onChangeLib}: DeckProps) => {
  const [isFliped, setFliped] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const [isMixing, setMixing] = useState(false);

  useEffect(() => {
    setFliped(false);
  }, [currentIndex])
  const watchResponse = () => setFliped(true);
  const mixWords = () => {
    setIndex(0);
    onChangeLib([...shuffle(words).slice(0, 3)]);
    
  };
  const changeCard = () => {
    if(currentIndex == lib.length - 1) {
      setMixing(true);
      setTimeout(() => {mixWords(); setMixing(false)}, 1000)
      return;
    };
    setIndex(prev => prev + 1)
  }
  const cards = useMemo(() => {

    return lib.map((card, index) => 
      <Card key={index}
        data-index={index} 
        className={currentIndex === index ? `active playCard el${index + 1}` : `playCard el${index + 1}`} 
        translate={card.translate} 
        word={card.word}
        flip={isFliped}
        isLoading={isMixing}
        onFlip={watchResponse} 
        type={currentIndex === index ? 'play' : 'empty'}/>
    )


  }, [lib, currentIndex, isMixing, isFliped])
  
  





  return (<>
     <DeckWrap>
            <Card type='empty' className='empty'/>
            {cards}
    </DeckWrap>
    <DeckMenu>
        <IconButton data-testid="mix" color='white' className='next' onClick={mixWords}><BsRepeat/></IconButton>
        <Button data-testid="checkResponse" onClick={watchResponse} $variant={'rounded'} $pd='1.5rem 3rem'>Показать ответ</Button>
        <IconButton data-testid="nextCard" color='white' className='next' onClick={changeCard}><BsArrowRight/></IconButton>
    </DeckMenu>
  </>
    
  )
}
