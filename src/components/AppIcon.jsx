/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw, { styled, css } from 'twin.macro'

export const AppIcon = ({ bg = '#fff', children }) => {
   return <Styles.Icon bg={bg}>{children}</Styles.Icon>
}

const Styles = {
   Icon: styled.li(
      props => css`
         ${tw`h-12 w-12 rounded-lg flex items-center justify-center shadow-md cursor-pointer`}
         ${props.bg && `background: ${props.bg}`}
      `
   ),
}
