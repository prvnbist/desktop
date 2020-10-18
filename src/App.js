/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro'

const App = () => <Container>hello world!</Container>

export default App

const Container = styled.div`
   ${tw`h-screen w-screen`}
`
