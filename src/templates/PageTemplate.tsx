import React, { PropsWithChildren } from 'react'
import { Wrap } from './styled'

export const PageTemplate = ({children}: PropsWithChildren) => {
  return (
    <Wrap>{children}</Wrap>
  )
}
