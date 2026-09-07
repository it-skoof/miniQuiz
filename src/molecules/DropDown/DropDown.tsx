import { IconButton } from '@/atoms/styled'
import { ReactNode } from 'react'

import { DropDownWrapper } from './styled'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'



type DropDownProps = React.HTMLAttributes<HTMLDivElement> & {
    $type: 'circle' | 'default'
    label?: string
    $icon?: ReactNode
    classNameContent?: string
    isOpen?: boolean
    openHandler?: () => void
}

export const DropDown = ({children, classNameContent, openHandler, $type, label, isOpen, $icon, ...props}: DropDownProps) => {
  
  

  
  if($type == 'circle'){
    return (
    <DropDownWrapper $type={$type} {...props}>
        <IconButton data-testid="favBtn" onClick={openHandler} $bg='#fff' $pd='0.7rem' className='drop__btn'>{$icon ? $icon : null}</IconButton>
        <div className={`drop__content${' ' +classNameContent}${isOpen ? ' active': ''}`}>{children}</div>
    </DropDownWrapper>
    )


  }
  return (
    <DropDownWrapper $type={$type} {...props}>
        <IconButton onClick={openHandler} className='drop__btn'><span>{label}</span>{isOpen ? <BsChevronUp/>:<BsChevronDown/>}</IconButton>
        {isOpen && <div className='drop__content'>{children}</div>}
    </DropDownWrapper>
  )
}
